<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\products;
use App\Models\products_history;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class admin extends Controller
{
    public function allUsers(Request $request)
    {
        $Users = User::all();
        return response()->json([
            "success" => true,
            "data" => $Users
        ]);
    }
    public function bandUser(Request $request, $id)
    {
        $user = User::find($id);
        $user->update(["accountStatus" => "disactive"]);
        return response()->json(
            [
                "success" => true,
                "message" => "user have been baned"
            ],
            Response::HTTP_OK
        );
    }
    public function approveUser(Request $request, $id)
    {
        $user = User::find($id);
        $user->update(["accountStatus" => "active"]);
        return response()->json(
            [
                "success" => true,
                "message" => "user have been baned"
            ],
            Response::HTTP_OK
        );
    }
    public function statistect(Request $request)
    {
        $currentMonth = Carbon::now()->month;
        $currentYear = Carbon::now()->year;
        $totalUsers = User::count();
        $totalProducts = Products::count();
        $totalpriceDrops = products_history::whereYear("created_at", $currentYear)
            ->whereYear('created_at', $currentYear)
            ->where("priceDiff", "<", 0)
            ->count();
        return response()->json([
            'total_users' => $totalUsers,
            'total_products' => $totalProducts,
            "totale_priceDrope" => $totalpriceDrops
        ]);
    }
}
