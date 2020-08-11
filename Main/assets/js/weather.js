function load(){
	var city = document.getElementById("city").value;
	theURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=663718f5418b05dca23eb3d1d5fe3a67';
	const form = document.querySelector(".about form");
	const input = document.querySelector(".about input");
	const msg = document.querySelector(".about .msg");
	const list = document.querySelector(".about #day");

	//Check if there is already a city 
	const listItems = list.querySelectorAll(".about .city");
	const listItemsArray = Array.from(listItems); 


	if (listItemsArray.length > 0) {
		msg.textContent = `You already know the weather for ${
			listItemsArray[0].querySelector(".city-name").textContent
		} ...otherwise be more specific by providing the country code as well 😉`;
		form.reset();
		input.focus();
		return;
	  }
	
	
	$.ajax({
		url: theURL,
		success: function (data) {
			/*Creates new Image object to use for weather icons*/
			image = new Image();
			image1 = new Image();
			image2 = new Image();
			image3 = new Image();
			image4 = new Image();
			image5 = new Image();

			image.src =   "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
			image1.src =  "http://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png";
			image2.src =  "http://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + "@2x.png";
			image3.src =  "http://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png";
			image4.src =  "http://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png";
			image4.src =  "http://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png";

			/*City Name & Country*/
			var cityName = data.city.name;
			var country = data.city.country;
				
			/*Current weather*/
			var dayTemp = data.list[0].main.temp.toFixed(0);
			var dayDesc = data.list[0].weather[0].description;
			var feelsLike = data.list[0].main.feels_like.toFixed(0);

			$('#date').html('Current Weather');
			$('#city-name').append(cityName + ', ' + country);
			$('#desc').append(dayDesc);
			$('#temp').html(dayTemp + '<sup>°c</sup>');
			$('#icon').empty().append(image);
			$('#feels').html('Feels like: ' + feelsLike + '<sup>°c</sup>');

			
			/*Day 1 Forecast*/
			var dayTemp1 = data.list[8].main.temp.toFixed(0);
			var dayDesc1 = data.list[8].weather[0].description;
			var feelsLike1 = data.list[8].main.feels_like.toFixed(0);
			var date1 = data.list[8].dt_txt;

			$('#date1').html(date1);
			$('#desc1').append(dayDesc1);
			$('#temp1').html(dayTemp1 + '<sup>°c</sup>');
			$('#icon1').empty().append(image1);
			$('#feels1').html('Feels like: ' + feelsLike1 + '<sup>°c</sup>');

			/*Day 2 Forecast*/
			var dayTemp2 = data.list[16].main.temp.toFixed(0);
			var dayDesc2 = data.list[16].weather[0].description;
			var feelsLike2 = data.list[16].main.feels_like.toFixed(0);
			var date2 = data.list[16].dt_txt;

			$('#date2').html(date2);
			$('#desc2').append(dayDesc2);
			$('#temp2').html(dayTemp2 + '<sup>°c</sup>');
			$('#icon2').empty().append(image2);
			$('#feels2').html('Feels like: ' + feelsLike2 + '<sup>°c</sup>');


			/*Day 3 Forecast*/
			var dayTemp3 = data.list[24].main.temp.toFixed(0);
			var dayDesc3 = data.list[24].weather[0].description;
			var feelsLike3 = data.list[24].main.feels_like.toFixed(0);
			var date3 = data.list[24].dt_txt;

			$('#date3').html(date3);
			$('#desc3').append(dayDesc3);
			$('#temp3').html(dayTemp3 + '<sup>°c</sup>');
			$('#icon3').empty().append(image3);
			$('#feels3').html('Feels like: ' + feelsLike3 + '<sup>°c</sup>');


			/*Day 4 Forecast*/
			var dayTemp4 = data.list[32].main.temp.toFixed(0);
			var dayDesc4 = data.list[32].weather[0].description;
			var feelsLike4 = data.list[32].main.feels_like.toFixed(0);
			var date4 = data.list[32].dt_txt;

			$('#date4').html(date4);
			$('#desc4').append(dayDesc4);
			$('#temp4').html(dayTemp4 + '<sup>°c</sup>');
			$('#icon4').empty().append(image4);
			$('#feels4').html('Feels like: ' + feelsLike4 + '<sup>°c</sup>');


			/*Day 5 Forecast*/
			var dayTemp5 = data.list[40].main.temp.toFixed(0);
			var dayDesc5 = data.list[40].weather[0].description;
			var feelsLike5 = data.list[40].main.feels_like.toFixed(0);
			var date5 = data.list[40].dt_txt;

			$('#date5').html(date5);
			$('#desc5').append(dayDesc5);
			$('#temp5').html(dayTemp5 + '<sup>°c</sup>');
			$('#icon5').empty().append(image5);
			$('#feels5').html('Feels like: ' + feelsLike5 + '<sup>°c</sup>');


			
		 
			
		}
	})
	.catch(() => {
		msg.textContent = "Please search for a valid city";
	  });

	  msg.textContent = "";
	  form.reset();
	  input.focus();
	
} 