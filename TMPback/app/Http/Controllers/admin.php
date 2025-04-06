<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\products;
use Symfony\Component\HttpFoundation\Response;

class admin extends Controller
{
    public function products(Request $request)
    {
        $products = Products::with('owner')->get();

        return response()->json(
            [
                'success' => true,
                'data' => $products
            ],
            Response::HTTP_OK
        );
    }
}
