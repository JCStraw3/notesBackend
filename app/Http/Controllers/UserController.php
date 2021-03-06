<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\User;

use Auth;

class UserController extends Controller {

	public function readOne(Request $request){

		$id = $request->input('id');

		var_dump($request->user);

		// $authuser = Auth::user();

		// if(!$id){
		// 	$id = $authuser->id;
		// }

		$user = User::findOrFail($id);

		// if($authuser->id !== $user->id){
		// 	return redirect('/view/404.template');
		// }

		return json_encode($user);

	}

}