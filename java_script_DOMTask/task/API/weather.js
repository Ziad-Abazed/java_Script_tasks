const city = document.querySelector("#city");
		const cityName = document.querySelector(".location");
		const Temp = document.querySelector(".weather-temp");
		const main = document.querySelector("#main");
		const discription = document.querySelector(".weather-desc");
		const h = document.getElementById("HUMIDITY");
		const p = document.getElementById("pressure")
		const input = document.querySelector("#city");
		const w = document.getElementById("WIND");
		const day = document.querySelector(".date-dayname")
		const date = document.querySelector(".date-day")
		const d = new Date().toLocaleDateString;
		const day1 = document.getElementById("d1")
		input.onchange = () => {
			weatherUpdate(city.value);
			city.value = "";
		};
		weatherUpdate = (city) => {
			const xhr = new XMLHttpRequest();
			xhr.open(
				"GET",
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
			// in place of appid enter your open weather API Key
			// You can create it for free
			// https://home.openweathermap.org/users/sign_up

			xhr.send();
			xhr.onload = () => {
				var data = JSON.parse(xhr.response);
				console.log(data)
				cityName.innerHTML = data.name;
				Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
				discription.innerHTML = data.weather[0].description;
				p.innerHTML = data.main.pressure + " psi"
				w.innerHTML = data.wind.speed + " km/h"
				h.innerHTML = data.main.humidity + "%"
				day.innerHTML = new Date().toLocaleDateString('en-us', { weekday: "long" });
				day1.innerHTML = new Date().toLocaleDateString('en-us', { weekday: "long" });
				date.innerHTML = new Date().toLocaleDateString('en-gb');
			};
		};

		weatherUpdate("dubai");