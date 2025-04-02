<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\products_history;

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
    public function hestory() {
        return $this->hasMany(products_history::class,"product_id");
    }
}
