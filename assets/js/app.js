
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

btnPesquisar.addEventListener('click', function(){

      getClima();

})

async function getClima(){
            
          try{

            let local = document.querySelector('#pesquisar').value;
            
            let url = `https://api.hgbrasil.com/stats/find_woeid?key=17284dd0&format=json-cors&sdk_version=console&city_name=${local}`;

            let response = await fetch(url);

            var dadosCidade = {};

            dadosCidade = await response.json()

            let dadosCidadeCode = dadosCidade.woeid;

            console.log(dadosCidade.woeid)

            let url2 = `http://api.hgbrasil.com/weather?woeid=${dadosCidade.woeid}&key=cf27ca00`;

            let response2 = await fetch(url2);

            let dados = {};

            console.log(dados);

          }
         
          catch (err) {
                console.log('fetch failed', err);
              
         
            }finally{

               fadeIn(card);

          let table1 = document.querySelector("#tbl1");

            table1.innerHTML +=
            `<tr>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td></td>
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

      }
          
 }


 