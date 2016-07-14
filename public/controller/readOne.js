(function(){

	var app = Sammy.apps.body;

	app.get('#/page', function(context){

		context.render('/view/readOne.template', {
		}, function(view){
			$('#body').html(view);
		});
		
	});

})();