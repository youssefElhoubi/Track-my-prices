<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\auth;

Route::post('/signup', [auth::class,"signUp"]);
Route::post('/signin', [auth::class,"signIn"]);
