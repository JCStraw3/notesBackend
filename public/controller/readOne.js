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
				});
			});
		
	});

})();