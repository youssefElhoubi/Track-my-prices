<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            "jwtcheck"=> \App\Http\Middleware\JWTvalidate::class,
            "gest"=>\App\Http\Middleware\gest::class,
            "isUser"=>\App\Http\Middleware\isUser::class,
            "isAdmin"=>\App\Http\Middleware\isAdmine::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
