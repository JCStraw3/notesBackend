(function(){

	var app = Sammy.apps.body;

	app.get('#/note/:id', function(context){
		// var id = this.params['id'];
		// console.log(id);

		// this.load('/readOne.json/1')
		// 	.then(function(note){
		// 		console.log(note);
		// 		console.log(note.title, '-', note.body);
		// 		context.render('/view/readOne.template', {
		// 			'title': note.title,
		// 			'body': note.body,
		// 		})
		// 			.appendTo($('body'));
		// 	});
		
	});

})();