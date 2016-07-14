(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context){

		context.render('/view/readMany.template', {
			'myVariable': 'Header',
			'newVariable': 'new',
		}, function(view){
			$('#body').html(view);
		});
		
	});

})();