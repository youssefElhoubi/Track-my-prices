<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    protected $table = 'products';
    protected $fillable = [
        "url",
        "name",
        "curentPrice",
        "platformName",
        "user_id"
    ];
}
