<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\ValidationException;
use App\Models\Products;

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

            // Create new product
            $newProduct = Products::create([
                "url" => $request->url,
                "name" => $$request->productTitle,
                "curentPrice" => $request->productPrice, // Correct mapping
                "platformName" => $request->productPlatform,
                "user_id" => $request->user_id,
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
}
