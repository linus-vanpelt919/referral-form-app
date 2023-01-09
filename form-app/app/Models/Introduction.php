<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Introduction extends Model
{
    use HasFactory;
    /**
     * この紹介コードに属するアンケート情報の取得
     */
    public function survey()
    {
        return $this->belongsTo(Survey::class, "id");
    }
}
