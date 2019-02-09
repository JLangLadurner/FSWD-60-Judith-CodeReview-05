



$(document).ready(function(){

			$('.like').click( function(){
				var counter = parseInt($('.hiddenVal').val());
				counter ++;
				$('.hiddenVal').val(counter)
				$('.theCount').text(counter);

				// alert('Thank you for your like!!');
			});



		});