<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Main Laravel route will redirect to Sammy application.

Route::get('/', function(){
	return redirect('index.html');
});

// Home route.

Route::get('/home.json', 'HomeController@viewHome');

// Registration routes.

Route::post('/register.json', 'Auth\AuthController@postRegister');

// Authentication routes.

Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Notes routes.

Route::get('/readMany.json', 'NoteController@readMany');
Route::get('/readOne.json/{id}', 'NoteController@readOne');
Route::post('/create.json', 'NoteController@create');
Route::put('/update.json', 'NoteController@update');
Route::delete('/delete.json', 'NoteController@delete');