<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\ValidationException;

class watchlist extends Controller
{
    public function addToWachList(Request $request)
    {
        try {
            $user_Id = $request->user_id;
            $validation = $request->validate([

            ]);
            $productId = $request->product_id;
        } catch (ValidationException $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
