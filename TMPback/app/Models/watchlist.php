<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class watchlist extends Model
{
    protected $table = 'watchlist';
    protected $fillable = [
        "user_id",
        "product_id"
    ];
}
