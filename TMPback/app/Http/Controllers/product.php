<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\ValidationException;
use App\Models\Products;
use App\Models\products_history;

class product extends Controller
{
    public function addProduct(Request $request)
    {
        try {
            // Validate incoming request
            $validatedData = $request->validate([
                "productTitle" => "required|string",
                "productImage" => "required|string",
                "productPrice" => "required|string",
                "productPlatform" => "required|string",
                "url" => "required|url"
            ]);
            $existingProduct = products::where("url", "=", $request->url)->exists();
            if ($existingProduct) {
                return response()->json(["message" => "this product alredy exists"], Response::HTTP_ALREADY_REPORTED);
            }
            // Create new product
            $newProduct = Products::create([
                "url" => $request->url,
                "name" => $request->productTitle,
                "curentPrice" => $request->productPrice,
                "platformName" => $request->productPlatform,
                "user_id" => $request->user_id,
            ]);
            products_history::create([
                "product_id" => $newProduct->id,
                "CurrentPrice" => $newProduct->curentPrice,
                "priceDiff" => 0
            ]);

            return response()->json([
                "success" => true,
                "message" => "Product added successfully.",
                "productInfo" => $newProduct
            ], Response::HTTP_CREATED);

        } catch (ValidationException $e) {
            return response()->json([
                "success" => false,
                "error" => "Validation failed.",
                "details" => $e->errors()
            ], Response::HTTP_BAD_REQUEST);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "error" => "An error occurred while adding the product.",
                "details" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function allProducts()
    {
        $products = Products::paginate(10);

        if ($products->isEmpty()) {
            return response()->json([
                "success" => false,
                "message" => "No products found."
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            "success" => true,
            "message" => "All products retrieved successfully.",
            "data" => $products
        ], Response::HTTP_OK);
    }

    public function myProducts(Request $request)
    {

        $products = Products::where("user_id", $request->user_id)->get();

        if ($products->isEmpty()) {
            return response()->json([
                "success" => false,
                "message" => "No products found for this user."
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            "success" => true,
            "message" => "User products retrieved successfully.",
            "data" => $products
        ], Response::HTTP_OK);
    }

    public function productInfo($id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json([
                "success" => false,
                "message" => "Product not found."
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            "success" => true,
            "message" => "Product retrieved successfully.",
            "data" => $product
        ], Response::HTTP_OK);
    }
    public function deleteProduct($id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json([
                "success" => false,
                "message" => "Product not found."
            ], Response::HTTP_NOT_FOUND);
        }

        $product->delete();

        return response()->json([
            "success" => true,
            "message" => "Product deleted successfully."
        ], Response::HTTP_OK);
    }
}
