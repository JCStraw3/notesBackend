(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context, next){

		$.getJSON('/readMany.json', function(data){
			context.render('/view/readMany.template', {
				notes: data,
			}, function(output){
				$('#content').html(output);
			});
		});
		
	});

})();