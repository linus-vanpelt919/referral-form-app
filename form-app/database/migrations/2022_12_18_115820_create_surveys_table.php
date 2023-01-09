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
    //pre
    {//事前アンケート用のテーブル
        Schema::create('surveys', function (Blueprint $table) {
            $table->id();//これをuser_idに紐付ける
            $table->string('name');
            $table->integer('age');
            $table->string('gender');
            $table->text('interest')->nullable();
            $table->string('delivery')->nullable();
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
        Schema::dropIfExists('surveys');
    }
};
