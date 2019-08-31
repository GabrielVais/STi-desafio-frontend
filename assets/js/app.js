
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

            let cidade = document.querySelector('#pesquisar').value;
         
            let response = await fetch(`https://api.github.com/users/${usuario}`);

            var dados = {};

            dados = await response.json()

              console.log(dados)

              return dados;

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
                <td>${dados.followers}</td>
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


 