<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class products_history extends Model
{
    protected $table = 'products_history';
    protected $fillable = [
        "product_id",
        "CurrentPrice",
        "priceDiff"
    ];
}
