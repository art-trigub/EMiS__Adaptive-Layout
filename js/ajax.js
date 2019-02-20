var input = document.getElementsByClassName("form-input-file")[0];
var btn = document.getElementsByClassName("form-button")[0];

btn.addEventListener('click', function(event) {
	var files = input.files;
	var file = files[0];
	var formData = new FormData();
	formData.append('file', file)
	
	var request = new XMLHttpRequest();
	request.addEventListener('load', function() {
		console.log(request.responseText)
	});

	request.open('POST', 'http://ДОМЕН/controller/controller.php')
	request.send(formData)
});