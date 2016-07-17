(function(){

	var app = Sammy.apps.body;

	app.get('#/create', function(context){

		context.render('/view/create.template', {
		}, function(output){
			$('#content').html(output);

			$('#create').click(function(event){

				var action = '/create.json';

				var newNote = {
					title: $('#title').val(),
					body: $('#body').val(),
				}

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
					$('#title').val('');
					$('#body').val('');
					alert('You can created a new note.');
				});

			});
		});

	});

})();