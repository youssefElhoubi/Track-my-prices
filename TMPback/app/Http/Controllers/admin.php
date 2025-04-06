<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\products;
use Symfony\Component\HttpFoundation\Response;

class admin extends Controller
{
    public function allUsers(Request $request)
    {
        $Users = User::all();
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
}
