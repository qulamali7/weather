const input = document.querySelector("form input");
const option = document.querySelector("form select");
const button = document.querySelector("form button");



fetch(
  `https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`
)
  .then((res) => res.json())
  .then((data) =>
    create(
      data.location.name,
      data.location.country,
      data.current.temp_c,
      data.current.temp_f,
      data.current.condition.icon,
      data.current.condition.text
    )
  );

function create(name, country, temp, icon, text) {
  const content = document.querySelector(".content");

  

  content.innerHTML = `
        <p class="city">City:${name}</p>
        <p class="country">Country:${country}</p>
        <p class="temp">Weahter Forecast:${temp}</p>
        <p class="condition">Sky condition:<img src="https:${icon}" alt=""> <span>${text}</span></p>`;
}
