<?php

namespace App\Http\Controllers;

use App\Models\Introduction;
use App\Models\Survey;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class SurveyController extends Controller
{
    // postの一覧を表示する
   public function index()
   {
       $posts = Survey::all();
       return response()->json($posts, 200);
   }
   public function create(Request $request)
   {//事前アンケート
       $post = new Survey;
       $post->name = $request->name;
       $post->age = $request->age;
       $post->gender = $request->gender;
       $post->interest = $request->interest;
       $post->delivery = $request->delivery;
       $post->save();

    //紹介コード
       $introductions = new Introduction;
       $introductions->user_id =  $post->id;
       $introductions->uuid = (string) Uuid::uuid7();//紹介コード作成
       $introductions->save();
       return response()->json($introductions, 200);
   }
   public function show($uuid)
   {
       $intro = Introduction::where('uuid', $uuid)->first();
       $user_id = $intro->user_id;
       $survey = Survey::where('id', $user_id)->first();
       return response()->json($survey, 200);
   }
}
