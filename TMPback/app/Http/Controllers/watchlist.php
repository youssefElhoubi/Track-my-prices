<?php

namespace App\Http\Controllers;

use App\Models\User;
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
                "product_id" => "required|numeric",
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
    public function myWatchLits(Request $request)
    {
        try {
            $userId = $request->user_id;

            // Fetch the watchlist products directly
            $watchProducts = WatchListM::where('user_id', $userId)
                ->with('product')
                ->get()
                ->pluck('product');

            if ($watchProducts->isEmpty()) {
                return response()->json([
                    "success" => false,
                    "message" => "No products found in the watchlist.",
                    "data" => []
                ], Response::HTTP_NOT_FOUND);
            }

            return response()->json([
                "success" => true,
                "message" => "Watchlist retrieved successfully.",
                "data" => $watchProducts
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "An error occurred while retrieving the watchlist.",
                "error" => $th->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function removeFromWtchlist(Request $request)
    {
        try {
            $userId = $request->user_id;
            $wachedItemID = $request->itemId;
            $wachedItem = WatchListM::find($wachedItemID);
            if ($userId !== $wachedItem->user_id) {
                return response()->json(["message" => "you do not have the right to delete this item"], Response::HTTP_UNAUTHORIZED);
            }

            $wachedItem->delete();

            return response()->json([
                "success" => true,
                "message" => "Item removed from watchlist successfully."
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "An error occurred while retrieving the watchlist.",
                "error" => $th->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
