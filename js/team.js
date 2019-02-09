var team =[];

		function teams (data){
			team.push(data)
		}

		for (var i=0; i<x.length; i++){

			var employee = x[i];

			document.getElementById("team").innerHTML += "<div><img id='pix'src='" + employee.image + "'>" + "<br><p>" + employee.firstName + "<br>" + employee.email + "</p></div>";

		}	

		document.addEventListener('DOMContentLoaded',function(){teams(employee[i])}, false);