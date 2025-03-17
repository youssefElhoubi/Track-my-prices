<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth;
use App\Http\Controllers\scraper;

Route::middleware("gest")->group(function(){
    Route::post('auth/signup', [auth::class,"signUp"]);
    Route::post('auth/signin', [auth::class,"signIn"]);
    Route::post('auth/passwored/forget', [auth::class,"passworedResetLink"]);
    Route::patch('auth/passwored/change/{id}', [auth::class,"passworedChange"]);
});
Route::get('test', [scraper::class,"scrap"]);
