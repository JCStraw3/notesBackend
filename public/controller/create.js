(function(){

	var app = Sammy.apps.body;

	app.get('#/create', function(context){

		context.render('/view/create.template', {
		}, function(output){
			$('#content').html(output);
		});

	});

	app.post('#/create', function(context){

		var action = '/create.json';

		var newNote = {
			title: this.params['title'],
			body: this.params['body'],
		};

		$.ajax({
			url: action,
			method: 'post',
			data: newNote,
			dataType: 'json',
			error: function(result){
				console.log(result);
			}
		})
		.done(function(context){
			alert('You can created a new note.');
		});

	});

})();