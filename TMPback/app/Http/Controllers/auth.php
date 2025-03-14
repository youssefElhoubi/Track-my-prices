<?php

namespace App\Http\Controllers;

use App\Mail\passworedResetMail;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;


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
    public function passworedResetLink(Request $req)
    {
        try {
            $email = $req->email;
            $user = User::where("email", "=", $email)->first();
            if (!$user) {
                return response()->json(["message" => "User not found with this credentails "], Response::HTTP_NOT_FOUND);
            }
            $detailes = ["email"=>$user->email,"id"=>$user->id];
            Mail::to($email)->send(new passworedResetMail($detailes));
            return response()->json(["message"=>"we will send you a message if we found your account"]);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
