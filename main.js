let btn_close = document.getElementById("btn_close"); 
let filepicker = document.getElementById("filepicker");
let btn_github = document.getElementById("btn_github");

let jsondata = {
    "img":null,
    "enabled":true
}

btn_close.addEventListener("click", function(){
    close()
});
btn_github.addEventListener("click", function(){
    chrome.tabs.create({active: true, url: "https://alefouau.github.io"})
});


filepicker.onchange = function(){
    var file = filepicker.files[0];/*pega o arquivo*/
    var reader = new FileReader();/*cria um filereader para ler o arquivo*/
    reader.readAsDataURL(file); /*inicia o processo para codificar a imagem em BASE64*/
    reader.onloadend = async function() {/*funcao para ser executada quando o processo for concluido*/
        jsondata.img = reader.result;
        chrome.storage.local.set({'fbcg': jsondata});/*grava a imagem no armazenamento*/
        let [tab] = await chrome.tabs.query({"url":"https://www.facebook.com/*"});/*espera a url carregar antes de injetar codigo*/
        chrome.scripting.executeScript({/*injeta o codigo*/
        target: {tabId: tab.id}, /*pega o id da aba pela url*/
        func: injectjs, /*executa a funcao injectjs(reader.result)*/
        args: [reader.result]
      });
    }
}
function injectjs(x){
    applyBg(x);
}
