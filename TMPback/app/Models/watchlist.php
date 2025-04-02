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
    public function product(){
        return $this->belongsTo(products::class,"product_id");
    }
}
