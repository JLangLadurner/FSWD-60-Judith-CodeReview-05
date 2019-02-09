


	$(document).ready(function(){

			for(i = 0; i < film_data.length; i++) {
				$("#myfilms").append(`<div class='col-lg-6 ${film_data[i].genre}'>
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
				<i class="glyphicon glyphicon-thumbs-up big round like"></i>
				<div class= 'theCount'>
				</div>
				<input type="hidden" class="hiddenVal" value="0">	
				</div>
			</div>`);
		}




		
	});

	
