var container = document.getElementById('container')

let key = '84e270f970a83172aa187868316821fa'
let iFrame = document.getElementById('gmap_canvas')

async function SearchBar() {
  try {
    let city = document.getElementById('city').value
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
    )
    let data = await res.json()
    showData(data)
    // console.log(data)
  } catch (err) {
    console.log(err)
  }
}
async function getWeatherData() {
  try {
    let city = document.getElementById('city').value ///accepting data
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}`,
    )

    let d = await res.json()
    showWeather(d) //you will get data so invoke function here
    // console.log(data)
  } catch (err) {
    console.log(err)
  }
}

function showData(gp) {
  console.log(gp)
  container.innerHTML = ''

  let leftdiv = document.createElement('div')
  leftdiv.setAttribute('class', 'leftdiv')

  let mintempdiv = document.createElement('div')
  let mintempimg = document.createElement('img')
  mintempimg.src =
    'https://cdn.iconscout.com/icon/premium/png-256-thumb/low-temperature-1895134-1605050.png'
  let MinTemp = document.createElement('p')
  MinTemp.innerText = `Min-Temp::${gp.main.temp_min}`
  mintempdiv.append(MinTemp, mintempimg)

  let maxtempdiv = document.createElement('div')
  let maxtempimg = document.createElement('img')
  maxtempimg.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPAlFmN7UcU0fCzDysf8wHzrNSp9cr3QsmA&usqp=CAU'
  let MaxTemp = document.createElement('p')
  MaxTemp.innerText = `Max-Temp::${gp.main.temp_max}`
  maxtempdiv.append(MaxTemp, maxtempimg)

  let winddiv = document.createElement('div')
  let windimg = document.createElement('img')
  windimg.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_apfpBVKSgWBfpB4zpCiIZBX8H6-zxKCbFQ&usqp=CAU'
  let wind = document.createElement('p')
  wind.innerText = `Wind::${gp.wind.speed}`
  winddiv.append(wind, windimg)

  let clouddiv = document.createElement('div')
  let cloudimg = document.createElement('img')
  cloudimg.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kHj8kncB1_ru9wQhJ-DwwHrEKuKxWomupw&usqp=CAU'
  let cloud = document.createElement('p')
  cloud.innerText = `Cloud::${gp.clouds.all}`
  clouddiv.append(cloud, cloudimg)

  let sunrisediv = document.createElement('div')
  let sunriseimg = document.createElement('img')
  sunriseimg.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlBbT7x0pXGmy2_DxZSoNQzaJ1dd5L6Mlew&usqp=CAU'
  let sunrise = document.createElement('p')
  sunrise.innerText = `Sunrise::${gp.sys.sunrise}`
  sunrisediv.append(sunrise, sunriseimg)

  let sunsetdiv = document.createElement('div')
  let sunsetimg = document.createElement('img')
  sunsetimg.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhVKivafklSOxyRH8pyFOa19B8HSbaS4PUg&usqp=CAU'

  let sunset = document.createElement('p')
  sunset.innerText = `Sunset::${gp.sys.sunset}`
  sunsetdiv.append(sunset, sunsetimg)

  let rightdiv = document.createElement('div')
  rightdiv.setAttribute('class', 'rightdiv')
  iFrame.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCNC_IWghKRV-5CaatCR1jw5a0io3iXpJk&q=${gp.name}`

  rightdiv.append(iFrame)
  leftdiv.append(
    mintempdiv,
    maxtempdiv,
    winddiv,
    clouddiv,
    sunrisediv,
    sunsetdiv,
  )
  container.append(leftdiv, rightdiv)
}
var container1=document.getElementById("container1")
function showWeather(d) {
  //d represent whole data
  document.getElementById('container1').textContent = ''
  console.log(d.list)
  d.list.forEach(function (el, index) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
    if (el.weather[0].main == 'Clear') {
      var div = document.createElement('div')

      var day = document.createElement('h2')
      day.textContent = days[index]

      var logo = document.createElement('p')
      logo.innerHTML = '<i class="fas fa-sun fa-4x"></i>'

      var minTemp = document.createElement('h3')
      minTemp.textContent = "minTemp :"+Math.round(el.main.temp_min - 273)

      var maxTemp = document.createElement('h3')
      maxTemp.textContent = "maxTemp :"+Math.round(el.main.temp_max - 273)
    } else if (el.weather[0].main == 'Clouds') {
      var div = document.createElement('div')

      var day = document.createElement('h2')
      day.textContent = days[index]

      var logo = document.createElement('p')
      logo.innerHTML = '<i class="fas fa-cloud-sun fa-4x"></i>'

      var minTemp = document.createElement('h3')
      minTemp.textContent ="minTemp :"+ Math.round(el.main.temp_min - 273)

      var maxTemp = document.createElement('h3')
      maxTemp.textContent = "maxTemp :"+Math.round(el.main.temp_max - 273)
    } else if (el.weather[0].main == 'Snow') {
      var div = document.createElement('div')

      var day = document.createElement('h2')
      day.textContent = days[index]

      var logo = document.createElement('p')
      logo.innerHTML = '<i class="fas fa-cloud-showers-heavy fa-4x"></i>'

      var minTemp = document.createElement('h3')
      minTemp.textContent ="minTemp :"+Math.round(el.main.temp_min - 273)

      var maxTemp = document.createElement('h3')
      maxTemp.textContent ="maxTemp :"+Math.round(el.main.temp_max - 273)
    }

    div.append(day, logo, minTemp, maxTemp)
    container1.append(div)
    // }
  })
}
