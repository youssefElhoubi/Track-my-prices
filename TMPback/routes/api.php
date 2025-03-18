<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth;
use App\Http\Controllers\scraper;
use App\Http\Controllers\product;

Route::middleware("gest")->group(function () {
    Route::post('auth/signup', [auth::class, "signUp"]);
    Route::post('auth/signin', [auth::class, "signIn"]);
    Route::post('auth/passwored/forget', [auth::class, "passworedResetLink"]);
    Route::patch('auth/passwored/change/{id}', [auth::class, "passworedChange"]);
});
Route::middleware(["jwtcheck", "isUser"])->group(function () {
    Route::post("product/scrap", [scraper::class, "scrap"]);
    Route::post("product/add", [product::class, "addProduct"]);
});
