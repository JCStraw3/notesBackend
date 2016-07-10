<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Note;

class NoteController extends Controller {

	public function create(Requests\CreateNoteRequest $request){

		$note = new Note($request->all());

		$note->save();

		return json_encode($note);

	}

	public function readMany(){

		$notes = Note::latest()->get();

		return json_encode($notes);

	}

	public function readOne($id){

		$note = Note::findOrFail($id);

		return json_encode($note);

	}

	public function update($id, Requests\UpdateNoteRequest $request){

		$note = Note::findOrFail($id);

		$note->update($request->all());

		return json_encode($note);

	}

	public function delete(){

	}

}