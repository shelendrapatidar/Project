let getlocation = document.querySelector(".getlocation");
let city = document.querySelector(".city");
let city_search = document.querySelector(".city_search");
let citysearchTwo = document.querySelector(".city_search2");
let cityTwo = document.querySelector(".city2");
let locate = document.querySelector(".locate");
let longitude = document.querySelector(".longitude");
let latitude = document.querySelector(".latitude");
let description = document.querySelector(".description");
let temp = document.querySelector(".temp");
let feels_like = document.querySelector(".feels_like");
let temp_min = document.querySelector(".temp_min");
let temp_max = document.querySelector(".temp_max");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");
let cloud = document.querySelector(".cloud");
let interface = document.querySelector(".interface");
let main = document.querySelector(".main");
let footer2 = document.querySelector(".footer2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let access = document.querySelector(".access");
let accesssib = document.querySelector(".accesssib");
let dir = document.querySelector(".dir");
let wrapper = document.querySelector(".wrapper");

interface.classList.add("hidden");
footer2.classList.add("hidden");
btn1.addEventListener("click", () => {
	// interface.classList.remove("hidden");
	location.reload();
	main.classList.remove("hidden");
	// getLocation();
});
btn2.addEventListener("click", () => {
	// location.reload();
	main.classList.add("hidden");
	// access.classList.add("hidden");
	// interface.classList.add("hidden");
	footer2.classList.remove("hidden");
});
// function changeUI(data) {
// 	locate.innerText = "locaation : " + data.name + " " + data.sys.country;
// 	longitude.innerText = "longitude : " + data.coord.lon;
// 	latitude.innerText = "latitude : " + data.coord.lat;
// 	description.innerText = "description : " + data.weather[0].description;
// 	temp.innerText = "temp : " + Math.floor(data.main.temp - 273.5);
// 	feels_like.innerText =
// 		"feels like : " + Math.floor(data.main.feels_like - 273.5);
// 	temp_min.innerText = "min temp : " + Math.floor(data.main.temp_min - 273.15);
// 	temp_max.innerText = "max temp : " + Math.floor(data.main.temp_max - 273.15);
// 	humidity.innerText = "humidity : " + data.main.humidity;
// 	pressure.innerText = "pressure : " + data.main.pressure;
// 	wind.innerText = "wind : " + data.wind.speed + "  dir : " + data.wind.deg;
// 	cloud.innerText = "cloud : " + data.clouds.all;
// }
function changeUI(data) {
	locate.innerText = data.name;
	longitude.innerText = data.coord.lon;
	latitude.innerText = data.coord.lat;
	description.innerText = data.weather[0].description;
	temp.innerText = Math.floor(data.main.temp - 273.5);
	feels_like.innerText = Math.floor(data.main.feels_like - 273.5);
	temp_min.innerText = Math.floor(data.main.temp_min - 273.15);
	temp_max.innerText = Math.floor(data.main.temp_max - 273.15);
	humidity.innerText = data.main.humidity;
	pressure.innerText = data.main.pressure;
	wind.innerText = data.wind.speed;
	dir.innerText = data.wind.deg;
	cloud.innerText = data.clouds.all;
}
citysearchTwo.addEventListener("click", () => {
	weather_city(cityTwo.value);
	cityTwo.value = "";
	if (interface.classList.contains("hidden")) {
		interface.classList.remove("hidden");
	}
	let parent = citysearchTwo.parentElement;
	parent.insertAdjacentElement("afterend", interface);
});
city_search.addEventListener("click", () => {
	weather_city(city.value);
	city.value = "";
	if (interface.classList.contains("hidden")) {
		interface.classList.remove("hidden");
	}
	let parent2 = city_search.parentElement;
	parent2.insertAdjacentElement("afterend", interface);
	access.classList.add("hidden");
});
getlocation.addEventListener("click", () => {
	console.log("calling the getLocation function");
	getLocation();
});
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("Your browser not supported location detection ");
	}
}

function showPosition(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	console.log(latitude);
	console.log(longitude);
	weather_location(latitude, longitude);
}
async function weather_city(city_name) {
	let API_KEY = "2a4a6b79892da20dc9fb4c853eb057ff";
	let response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
	);
	let data = await response.json();
	console.dir(data);
	// interface.classList.toggle("hidden");
	// main.classList.add("hidden");
	changeUI(data);
}
async function weather_location(latitude, longitude) {
	let API_KEY = "2a4a6b79892da20dc9fb4c853eb057ff";
	let response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
	);
	let data = await response.json();
	console.dir(data);
	let accessparent = access.parentElement;
	if (interface.classList.contains("hidden")) {
		interface.classList.remove("hidden");
	}
	accessparent.insertAdjacentElement("beforeend", interface);
	// main.classList.add("hidden");
	access.classList.add("hidden");
	accesssib.classList.add("hidden");
	changeUI(data);
}
