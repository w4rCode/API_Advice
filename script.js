/* https://api.adviceslip.com/advice -> API for advices to young adults

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'CARREGANDO...';

    let response = await fetch('https://api.adviceslip.com/advice');
    let json = await response.json()

    console.log(json)
            let postHtml = `<div><h1> ${json.slip.advice}</h1></div>`
            postArea.innerHTML += postHtml;
}

let button = document.getElementById('newAdviceButton');
    button.addEventListener('click', readPosts);

readPosts() */ 

async function readPosts() {
  let postArea = document.querySelector(".posts");
  postArea.innerHTML = "Loading...";

  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    let json = await response.json();

    let postHtml = `${json.slip.advice}`;
    postArea.innerHTML = postHtml;

    const titulo = document.querySelector(".titulo-principal");
    typeWrite(titulo);
    
  } catch (error) {
    console.error("Erro ao obter conselho:", error);
    postArea.innerHTML = "Erro ao carregar o conselho.";
  }
}

let button = document.getElementById("newAdviceButton");
button.addEventListener("click", readPosts);

// Remova a chamada para readPosts() aqui, para que a mensagem 'CARREGANDO...' não apareça automaticamente ao carregar a página.

// Efeito escrevendo
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}
