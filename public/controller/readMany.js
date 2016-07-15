(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){

		this.load('/readMany.json')
			.then(function(notes){
				$.each(notes, function(i, note){
					context.render('/view/readMany.template', {
						'title': note.title,
						'body': note.body,
					})
						.appendTo($('body'));
				});
			});
		
	});

})();