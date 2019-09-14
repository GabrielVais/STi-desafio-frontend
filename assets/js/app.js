
//metodo para fechar card
const cardClose = document.querySelector('.card-close');

const card = document.querySelector('.card');

cardClose.addEventListener('click', function(){


    if(isHidden(cardClose)){

        fadeIn(card);

    }else{

      fadeOut(card);    

    }



})

function isHidden(el) {
    return (el.offsetParent === null)
}

//--------------------//
const btnPesquisar = document.querySelector('#btnPesquisar');

btnPesquisar.addEventListener('click', function(event){

      event.preventDefault();



      
      getName();




})

async function getName(){

    formulario = document.querySelector("#formulario");

    var dados = new FormData(formulario);


    try{

    let response = await fetch('apiYahoo.php', {

    method:'POST',
    body:dados
    
    });


    var dados = {};

    dados = await response.json()
 
  }catch(err){
            
        console.log('fetch failed', err);
              
         
       }finally{
      
      console.log(dados);

      let cardTitle = document.querySelector("#card-title");

      let headerTitle = document.querySelector("#header-title");

      let tempMin = document.querySelector("#tempMin");

      let tempMax = document.querySelector("#tempMax");

      let tempSen = document.querySelector("#tempSen");

      let vento = document.querySelector("#vento");

      let humidade = document.querySelector("#humidade");

      let cardDays = document.querySelector("#cardDays");


      cardTitle.innerText = dados.location.city;

      if(dados.current_observation.condition.text == "Cloudy"){

          var conditionBr = "Nuvens";

      }

      headerTitle.innerText = `${toCelsius(dados.current_observation.condition.temperature)}C ${conditionBr}`;

      tempMin.innerText = `${toCelsius(dados.forecasts[0].low)}C`;
      
      tempMax.innerText = `${toCelsius(dados.forecasts[0].high)}C`; 

      vento.innerText = `${dados.current_observation.wind.speed}KM` ;

      humidade.innerText = `${dados.current_observation.atmosphere.humidity}%`;

      
      cardDay = cardDays.children;

      cardDay[0].innerText = `${toCelsius(dados.forecasts[1].high)}C ${toCelsius(dados.forecasts[1].low)}C`;

      cardDay[1].innerText = `${toCelsius(dados.forecasts[2].high)}C ${toCelsius(dados.forecasts[2].low)}C`;

      cardDay[2].innerText = `${toCelsius(dados.forecasts[3].high)}C ${toCelsius(dados.forecasts[3].low)}C`;

      cardDay[3].innerText = `${toCelsius(dados.forecasts[4].high)}C ${toCelsius(dados.forecasts[4].low)}C`;

      cardDay[4].innerText = `${toCelsius(dados.forecasts[5].high)}C ${toCelsius(dados.forecasts[5].low)}C`;


      let table1 = document.querySelector("#tbl1");

            table1.innerHTML +=
            `<tr>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>18</td>
                <td>27</td>
                <td>rio de janeiro</td>
              </tr>
               <tr>
                <td>18</td>
                <td>27</td>
                <td>rio de janeiro</td>
              </tr>
               <tr>
                <td>18</td>
                <td>27</td>
                <td>rio de janeiro</td>
          </tr>`;

        fadeIn(card);
    }

}

function toCelsius(fahrenheit){
    return (5 * (fahrenheit - 32) / 9).toFixed(0);
}
