<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth;
use App\Http\Controllers\scraper;
use App\Http\Controllers\product;
use App\Http\Controllers\watchlist;

// sign up sign in end points

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
    Route::get("product/own", [product::class, "MyProducts"]);
    Route::get("product/{id}", [product::class, "productInfo"]);
    Route::delete("product/{id}", [product::class, "deleteProduct"]);
    Route::get("product",[product::class,"search"]);
    // watch list end points
    Route::post("watchlist/add",[watchlist::class,"addToWachList"]);
    Route::delete("watchlist",[watchlist::class,"removeFromWtchlist"]);
    Route::get("watchlist",[watchlist::class,"myWatchLits"]);
});
