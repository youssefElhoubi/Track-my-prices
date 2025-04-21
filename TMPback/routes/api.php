<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth;
use App\Http\Controllers\scraper;
use App\Http\Controllers\product;
use App\Http\Controllers\watchlist;
use App\Http\Controllers\admin;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Symfony\Component\HttpFoundation\Response;

// sign up sign in end points
Route::post("decode", function (Request $request) {
    $token = $request->header("Authorization");
    if (!$token) {
        return response()->json(["message" => "you do not have the access to this route"], Response::HTTP_UNAUTHORIZED);
    }
    $payload = JWT::decode($token, new Key(env("JWT_SECRET"), "HS256"));
    if ($payload->exp < time()) {
        return response()->json(["message" => "token has expired"], Response::HTTP_UNAUTHORIZED);
    }
    return response()->json(["data" => $payload], Response::HTTP_OK);
});

Route::middleware("gest")->group(function () {
    Route::post('auth/signup', [auth::class, "signUp"]);
    Route::post('auth/signin', [auth::class, "signIn"]);
    Route::post('auth/passwored/forget', [auth::class, "passworedResetLink"]);
    Route::patch('auth/passwored/change/{id}', [auth::class, "passworedChange"]);
});
// product end points
Route::middleware(["jwtcheck", "isUser"])->group(function () {
    // product end points
    Route::post("product/scrap", [scraper::class, "scrap"]);
    Route::post("product/add", [product::class, "addProduct"]);
    Route::get("product/all", [product::class, "allProducts"]);
    Route::get("product/total", [product::class, "tottalProducts"]);
    Route::get("product/own", [product::class, "MyProducts"]);
    Route::get("product/{id}", [product::class, "productInfo"]);
    Route::delete("product/{id}", [product::class, "deleteProduct"]);
    Route::get("product", [product::class, "search"]);
    // watch list end points
    Route::post("watchlist/add", [watchlist::class, "addToWachList"]);
    Route::delete("watchlist", [watchlist::class, "removeFromWtchlist"]);
    Route::get("watchlist", [watchlist::class, "myWatchLits"]);
});
Route::middleware(["jwtcheck", "isAdmin"])->group(function () {
    Route::get("admin/products", [product::class, "productsWithUser"]);
    Route::delete("/admin/products/{id}", [product::class, "deleteProduct"]);
    Route::patch("/admin/users/{id}/suspend", [admin::class, "bandUser"]);
    Route::get("/admin/statistect", [admin::class, "statistect"]);
    Route::get("/admin/users", [admin::class, "allUsers"]);
    Route::patch("/admin/users/{id}/approve", [admin::class, "approveUser"]);
});
