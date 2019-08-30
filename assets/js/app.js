
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

//--------------------

async function getClima(){
            
          try{
         
            let response = await fetch(`https://api.github.com/users/${this.usuario}`);

            let response2 = await fetch(`
              https://api.github.com/users/${this.usuario}/repos`);
         
            this.dados = await response.json()

            this.dados2 = await response.json()

              console.log(this.dados)

              console.log(this.dados2)

              return dados;
          
          }
         
          catch (err) {
                console.log('fetch failed', err);
              
         
            }finally{

               this.showLoad = false;

      }
          
 }


 