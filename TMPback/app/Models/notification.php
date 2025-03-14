<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class notification extends Model
{
    protected $table = 'notifications';
    protected $fillable = [
        "user_id",
        "product_id",
        "subject"
    ];
    
}
