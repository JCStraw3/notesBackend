(function(){

	var app = Sammy.apps.body;

	app.get('#/create', function(context){

		context.render('/view/create.template', {
		}, function(view){
			$('#body').html(view);
		});

	});

})();