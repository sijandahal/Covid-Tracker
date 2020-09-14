const api = 'https://api.covid19api.com/total/country/';
 

async function getData(data) {
  const response = await fetch(`${api}${data}`)

  const finalData = await response.json();
  let result = finalData.pop()
  console.log(result);
   getCases(result);
 }

const value = document.querySelector('#country');
value.addEventListener('change', function() {
  var countryValue =  value.options[country.selectedIndex].text;
  console.log(countryValue);
  getData(countryValue);
})

const div = document.querySelector('.result');
function getCases(result) {
  div.innerHTML = `
  <h3 class = "country">Country:<span>${result.Country}<span></h3>
  <h3 class = "confirmed">Confirmed: <span>${result.Confirmed}</span></h3>
  <h3 class = "active">Active Cases : <span>${result.Active}</span></h3>
  <h3 class = "Recovered">Recovered:<span>${result.Recovered}</span> </h3>
  <h3 class = "Deaths">Deaths:<span>${result.Deaths}</span></h3>
  `  
if(div.style.display = "none") {
  div.style.display = "flex"
}

}

