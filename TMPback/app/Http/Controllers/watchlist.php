<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Validation\ValidationException;
use App\Models\watchlist as WatchListM;

class watchlist extends Controller
{
    public function addToWachList(Request $request)
    {
        try {
            $user_Id = $request->user_id;
            $validation = $request->validate([
                "product_id" => "required|numirec",
            ]);
            $productId = $request->product_id;
            WatchListM::create([
                "user_id" => $user_Id,
                "product_id" => $productId
            ]);
            return response()->json(
                [
                    "status" => "success",
                    "message" => "a new item have been added to your watch list"
                ],
                Response::HTTP_CREATED
            );
        } catch (ValidationException $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
