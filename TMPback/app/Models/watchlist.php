<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class watchlist extends Model
{
    protected $table = 'watch_list';
    protected $fillable = [
        "user_id",
        "product_id"
    ];
    public function product(){
        return $this->belongsTo(products::class,"product_id");
    }
    public function watcher(){
        return $this->belongsTo(User::class,"user_id");
    }
}
