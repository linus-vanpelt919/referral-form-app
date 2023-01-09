<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;
    /**
     * 事前アンケートに関連している紹介コードを取得
     */
    public function introduction()
    {
        return $this->hasOne(Introduction::class, "user_id");
    }
}
