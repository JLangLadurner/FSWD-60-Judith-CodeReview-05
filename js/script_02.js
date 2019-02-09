
	// append data from json into the index.html

	$(document).ready(function(){

			for(i = 0; i < film_data.length; i++) {
				$("#myfilms").append(`<div class='col-lg-6 ${film_data[i].genre} col-md-4 col-sm-12'>
				<div class="col-lg-6">
					<img src="${film_data[i].image}" width="250px" height="350px">
				</div>
				<div class="col-lg-5 text">
					<h4>${film_data[i].movieName}</h4><br>
					<p>${film_data[i].descr}</p><br>
					<p>${film_data[i].actor}</p><br>
					<p>${film_data[i].year}</p><br>
					<p>${film_data[i].genre}</p>

				</div>
				<div class="col-lg-3 ">
				<button type="submit" class="btn btn-success btn-sm round btnlike${film_data[i].id}" value="0">0
  				<span class="glyphicon glyphicon-thumbs-up big" aria-hidden="true"></span>
				</button>
				<div id="out${film_data[i].id}"></div>
			</div>`);
		}
	// counter works on first like button - unfortunately not on the following


	var buttonEL = document.querySelector('.btnlike1');
	var likes = 0;

	buttonEL.addEventListener('click', updateButton);

	function updateButton(){
	likes++;

	if(likes === 1){ 
		buttonEL.innerHTML = likes+ ' like';
	}

	else {
		buttonEL.innerHTML = likes+' likes';
	}
}
// 	// var buttonEL = document.querySelector('.btnlike2');
// 	// var likes = 0;

// 	// buttonEL.addEventListener('click', updateButton);

// 	// function updateButton(){
// 	// likes++;

// 	// if(likes === 1){ 
// 	// 	buttonEL.innerHTML = likes+ ' like';
// 	// }

// 	// else {
// 	// 	buttonEL.innerHTML = likes+' likes';
// 	// }
// }


	});


