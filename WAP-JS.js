var time = document.getElementById("time");
var date = new Date();
// time.innerHTML = date.toLocaleDateString();


var cityName = document.getElementById("city-name");
var Shape = document.getElementById("shape");
var Humi = document.getElementById("hu");
var winSpeed = document.getElementById("ws");
var visibility = document.getElementById("vs");
var fl = document.getElementById("fl");
var mint = document.getElementById("mint");
var maxt = document.getElementById("maxt");
let myMainBox = document.querySelector('.myMainBox')

function myWeather() {
    var inputName = document.getElementById("input").value;
    /*   var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
      var appId = '&appid=5af8921bf49793385e36060b781c0a78';
      var unit = '&units=metric';
      var completeUrl = baseUrl + inputName + appId + unit; */
    var full = `http://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=5af8921bf49793385e36060b781c0a78&units=metric`;
    let combine = document.querySelector('.combine')


    combine.style.display = "inline";
    combine.style.transitiom = "1s"

    fetch(full)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            cityName.innerHTML = `Current Temp in ${data.name} ${data.sys.country} is : <br> ${data.main.temp} &#176 C`;

            // Shape.innerHTML = data.weather[0].main;
            Humi.innerHTML = `${data.main.humidity}  %`;
            winSpeed.innerHTML = `${data.wind.speed} Np/m`;
            visibility.innerHTML = `${data.visibility} m`
            fl.innerHTML = `${data.main.feels_like}`
            mint.innerHTML = `${data.main.temp_min} &#176 C`
            maxt.innerHTML = `${data.main.temp_max} &#176 C`
            console.log(data)

            if (data.weather[0].main == "Clear") {
                myMainBox.style.backgroundImage = "url(/images/clear.jpg)",
                    myMainBox.style.backgroundPosition = "center",
                    myMainBox.style.backgroundSize = "cover",
                    Shape.innerHTML = `<i class="fas fa-cloud-sun" style="font-size:20px"></i>`

            } else if (data.weather[0].main == "Clouds") {
                myMainBox.style.backgroundImage = "url(/images/cloudy.jpg)",
                    myMainBox.style.backgroundPosition = "center",
                    myMainBox.style.backgroundSize = "cover",
                    Shape.innerHTML = `<i class="fas fa-cloud" style="font-size:20px"></i>`

            } else if (data.weather[0].main == "Rain" || data.weather[0].main == "moderate rain") {
                myMainBox.style.backgroundImage = "url(/images/rainy.jpg)",
                    myMainBox.style.backgroundPosition = "center",
                    myMainBox.style.backgroundSize = "cover",
                    Shape.innerHTML = `<i class="fas fa-rainbow  style=" font-size:20px  "></i>`

            } /* else if (inputName === 'tehran') {
                let aks = document.getElementById('aks');
                aks.innerText = `
                <img src="/images/B1.jpg" style="width: 200px; height: 200px;" class="col img-fluid" alt="Iran">
                `
            } */
        })
}


// Add BTn

let addBtn = document.getElementById('addButton');


addBtn.addEventListener('click', (e) => {

    let addBox = document.querySelector('.add');
    let info = prompt('Please write a City Name')

    var full = `http://api.openweathermap.org/data/2.5/weather?q=${info}&appid=5af8921bf49793385e36060b781c0a78&units=metric`;


    fetch(full)
        .then(data => data.json())
        .then(data => {

            let nima = () => {
                if (data.weather[0].main == "Clear") { return 'clear' }
                if (data.weather[0].main == "Clouds") { return 'clouds' }
                if (data.weather[0].main == "Rain") { return 'rain' }
            }


            const div = document.createElement('div')
            div.name = "div"
            div.id = "newBox"
            div.classList.value = `text-light p-3 m-2`
            div.innerHTML += `

            <div id="newBox" class="card bg-dark">
                <img class="card-img-top ${nima()}" >
                <div class="card-body ">
                    <div>
                        <h4 class="card-title">${ data.name} ${data.sys.country}</h4>
                    </div>
                    <div>
                        <p class="card-text">Temp : ${data.main.temp} &#176 C</p>
                        <p class="card-text">Shape : ${data.weather[0].main}</p>
                        <p class="card-text">HU : ${data.main.humidity}  %</p>
                        <p class="card-text">FL : ${data.main.feels_like}</p>
                   
                    </div>
                    <button id="removeButton" class="text-center btn btn-outline-danger mt-4"><i class="fa fa-trash" style="font-size: 20px;" aria-hidden="true"></i></button>
                </div>
            </div
            `


            addBox.append(div)
            let removeButton = div.querySelector('#removeButton')
            removeButton.addEventListener('click', (e) => {
                e.preventDefault();
                div.remove()
            })

        }

        )

})





/*     < div > Current Temp in ${ data.name } ${ data.sys.country } is: <br> ${data.main.temp} &#176 C</div>
        <div> Shape : ${data.weather[0].main}</div>
        <div> HU : ${data.main.humidity}  %</div>
        <div> SP : ${data.wind.speed} Np/m</div>
        <div> VS : ${data.visibility} m</div>
        <div> FL : ${data.main.feels_like}</div>
        <div> Min : ${data.main.temp_min} &#176 C</div>
        <div> Max : ${data.main.temp_max} &#176 C</div> */