chrome.storage.local.get(['fbcg'], function(result) {
    if(result.fbcg.enabled == true){
        console.log("Facebook Background Changer:  A extensao está ativada! (fbcg.enabled == true)");
        applyBg(result.fbcg.img);
    }
    else {
        console.log("Facebook Background Changer: Extensão desativada, portanto a imagem não será aplicada! (fbcg.enabled == false)")
    }
});
function applyBg(x) {
    try {
        let imgElement = document.createElement("img");
        imgElement.id = "fbcg_wall";
        document.body.insertBefore(imgElement, document.body.children[0]);    
        imgElement.src = x;
    }
    catch {
        imgElement.src = x;
    }
}

