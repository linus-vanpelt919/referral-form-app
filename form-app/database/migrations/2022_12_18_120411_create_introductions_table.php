<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {//紹介コード用のテーブル ユーザーID フラグの設定 有効期限など
        Schema::create('introductions', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();//発行コードにしたい これをusersテーブルと紐付けたい
            $table->foreignId('user_id')->constrained('surveys');//入力した人を紐付けたい
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('introductions',function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('introductions');
    }
};
