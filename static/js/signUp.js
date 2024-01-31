$(function(){
	$('#btnSignUp').click(function(){
		var x = document.forms["myForm"]["inputName"].value;
		var y = document.forms["myForm"]["inputPassword"].value;
		var z = document.forms["myForm"]["inputRole"].value;
		if (x == "" || x == null) {
			alert("Name must be filled out");
			// return false;
		}
		else if (y == "" || y == null) {
			alert("Password must be filled out");
			// return false;
		}
		else if (z == "" || z == null) {
			alert("Role must be filled out");
			// return false;
		}
		else{

					$.ajax({
						url: '/status',
						data: $('form').serialize(),
						type: 'POST',
						success: function(response){

						  console.log(response,response['url'])
							window.location.href = response['url']
							console.log(response);
						},
						error: function(error){
							console.log(error);
						}
					});

		}

	});
});


$(function(){
	$('#mapping').click(function(){

		$.ajax({
			url: '/createmapping',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){

				// print("redirect reached")
				// window.location.href = response['url'];
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
