<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\products_history;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

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
    public function owner(){
        return $this->hasOne(User::class,"user_id");
    }
}
