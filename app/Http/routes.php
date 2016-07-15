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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/readMany.json', 'NoteController@readMany');
Route::get('/readOne.json/{id}', 'NoteController@readOne');
Route::post('/create.json', 'NoteController@create');
Route::put('/{id}/update', 'NoteController@update');
Route::delete('/{id}/delete', 'NoteController@delete');