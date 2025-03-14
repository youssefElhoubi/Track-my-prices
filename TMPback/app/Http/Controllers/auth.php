<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Validation\ValidationException;
use stdClass;

class auth extends Controller
{
    public function signUp(Request $req)
    {
        try {
            $validator = $req->validate([
                'name' => 'required|string|min:4|:max:255',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:8',
            ]);
            $user = User::create([
                'name' => $req->name,
                'email' => $req->email,
                'password' => Hash::make($req->password)
            ]);
            $payload = [$user->id];
            $token = JWT::encode($payload, env("JWT_SECRET"), "HS256");
            return response()->json(["token" => $token], Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], Response::HTTP_BAD_REQUEST);
        }
    }
    public function signIn(Request $req)
    {
        try {
            $validator = $req->validate([
                'email' => 'required|email',
                'password' => 'required|string|min:8',
            ]);
            $user = User::where("email", "=", $req->email)->first();
            if (!Hash::check($req->password, $user->password, )) {
                return response()->json(["message" => "something is wrong"], Response::HTTP_BAD_REQUEST);
            }
            $expirationTime = time() + 3600;
            $payload = [
                'sub' => $user->id,
                'iat' => time(),
                'exp' => $expirationTime,
            ];
            $token = JWT::encode($payload, env("JWT_SECRET"), "HS256");
            return response()->json(["token" => $token], Response::HTTP_CREATED);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], Response::HTTP_BAD_REQUEST);
        }
    }
}
