(function(){

	var app = Sammy.apps.body;

	app.get('#/note/:id', function(context){

		var id = context.params.id;

		$.getJSON('/readOne.json/' + id)
			.done(function(data){
				context.render('/view/readOne.template', {
					note: data,
				}, function(output){
					$('#content').html(output);

					// Update a note.

					$('#update').click(function(event){

						var action = '/update.json';

						var updateNote = {
							id: $('#id').val(),
							title: $('#title').val(),
							body: $('#body').val(),
							_method: 'put',
						}

						$.ajax({
							url: action,
							method: 'post',
							data: updateNote,
							error: function(result){
								console.log(result);
							}
						})
						.done(function(context){
							alert('You have updated this note.');
						});

					});
				});
			});
		
	});

})();