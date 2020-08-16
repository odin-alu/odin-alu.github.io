function load(){
	var city = document.getElementById("city").value;
	urlAPI = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=663718f5418b05dca23eb3d1d5fe3a67';
	const form = document.querySelector(".about form");
	const input = document.querySelector(".about input");
	const msg = document.querySelector(".about .msg");
	const list = document.querySelector(".ajax-section .cities");

	//Check if there is already a city 
	const listItems = list.querySelectorAll(".ajax-section .cities");
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
		url: urlAPI,
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

			
			/*Day 1 Forecast*/
			var dayTemp1 = data.list[8].main.temp.toFixed(0);
			var dayDesc1 = data.list[8].weather[0].description;
			var feelsLike1 = data.list[8].main.feels_like.toFixed(0);
			var date1 = data.list[8].dt_txt;

			/*Day 2 Forecast*/
			var dayTemp2 = data.list[16].main.temp.toFixed(0);
			var dayDesc2 = data.list[16].weather[0].description;
			var feelsLike2 = data.list[16].main.feels_like.toFixed(0);
			var date2 = data.list[16].dt_txt;


			/*Day 3 Forecast*/
			var dayTemp3 = data.list[24].main.temp.toFixed(0);
			var dayDesc3 = data.list[24].weather[0].description;
			var feelsLike3 = data.list[24].main.feels_like.toFixed(0);
			var date3 = data.list[24].dt_txt;


			/*Day 4 Forecast*/
			var dayTemp4 = data.list[32].main.temp.toFixed(0);
			var dayDesc4 = data.list[32].weather[0].description;
			var feelsLike4 = data.list[32].main.feels_like.toFixed(0);
			var date4 = data.list[32].dt_txt;


			/*Day 5 Forecast*/
			



			const li = document.createElement("li");
      		li.classList.add("city");
			 const markup = `
			 <div class="container">
			 <div class="row">
			   <div class="col-sm" id="day">
				 <div class="card" style="width: 18rem; background-color: #f8f8f8; border-color: #f8f8f8;">
					 <div class="card-body">
					   <h5 class="card-title" id="date">Current Weather</h5>
					   <h5 class="card-title" id="city-name">${cityName}, ${country}</h5>
					   <h6 class="card-subtitle mb-2 text-muted" id="desc">${dayDesc}</h6>
					   <h1 class="card-text" id="city-temp">${dayTemp}<sup>°c</sup></h1>
					   <figure> <img class="city-icon" src="${image.src}"></figure>
					   <h6 class="card-link" id="feels">Feels like: ${feelsLike}<sup>°c</sup></h6>
					 </div>
				   </div>
			   </div>
			   <div class="col-sm" id="day">
				 <div class="card" style="width: 18rem; background-color: #f8f8f8; border-color: #f8f8f8;">
					 <div class="card-body">
					 <h5 class="card-title" id="date1">${date1}</h5>
					 <h6 class="card-subtitle mb-2 text-muted" id="desc">${dayDesc1}</h6>
					 <h1 class="card-text" id="city-temp1">${dayTemp1}<sup>°c</sup></h1>
					 <figure> <img class="city-icon" src="${image1.src}"></figure>
					 <h6 class="card-link" id="feels">Feels like: ${feelsLike1}<sup>°c</sup></h6>
					 </div>
				   </div>
			   </div>
			   <div class="col-sm" id="day">
				 <div class="card" style="width: 18rem; background-color: #f8f8f8; border-color: #f8f8f8;">
					 <div class="card-body">
					 <h5 class="card-title" id="date2">${date2}</h5>
					 <h6 class="card-subtitle mb-2 text-muted" id="desc">${dayDesc2}</h6>
					 <h1 class="card-text" id="city-temp2">${dayTemp2}<sup>°c</sup></h1>
					 <figure> <img class="city-icon" src="${image2.src}"></figure>
					 <h6 class="card-link" id="feels">Feels like: ${feelsLike2}<sup>°c</sup></h6>
					 </div>
				   </div>
			   </div>
			 </div>
			 <div class="row">
			   <div class="col-sm" id="day">
				 <div class="card" style="width: 18rem; background-color: #f8f8f8; border-color: #f8f8f8;">
					 <div class="card-body">
					   <h5 class="card-title" id="date">${date3}</h5>
					   <h6 class="card-subtitle mb-2 text-muted" id="desc">${dayDesc3}</h6>
					   <h1 class="card-text" id="city-temp">${dayTemp3}<sup>°c</sup></h1>
					   <figure> <img class="city-icon" src="${image3.src}"></figure>
					   <h6 class="card-link" id="feels">Feels like: ${feelsLike3}<sup>°c</sup></h6>
					 </div>
				   </div>
			   </div>
			   <div class="col-sm" id="day">
				 <div class="card" style="width: 18rem; background-color: #f8f8f8; border-color: #f8f8f8;">
					 <div class="card-body">
					 <h5 class="card-title" id="date1">${date4}</h5>
					 <h6 class="card-subtitle mb-2 text-muted" id="desc">${dayDesc4}</h6>
					 <h1 class="card-text" id="city-temp1">${dayTemp4}<sup>°c</sup></h1>
					 <figure> <img class="city-icon" src="${image4.src}"></figure>
					 <h6 class="card-link" id="feels">Feels like: ${feelsLike4}<sup>°c</sup></h6>
					 </div>
				   </div>
			   </div>
			   
			   </div>
			 </div>
		   </div> `;
		   li.innerHTML = markup;
      		list.appendChild(li);
			
		}


	})
	.catch(() => {
		msg.textContent = "Please search for a valid city";
	  });

	  msg.textContent = "";
	  form.reset();
	  input.focus();
	
} 