
let imgElement;
chrome.storage.local.get(r=>{
    if(r.img){
        fbcgApplyBackground(r.img);
    }
})

function fbcgApplyBackground(img){
    if(document.getElementById('fbcg') == undefined && document.getElementsByClassName('fbcg')[0] == undefined){
        document.body.className+=' fbcg';
        imgElement = document.createElement("img");
        imgElement.id = "fbcg";
        document.body.appendChild(imgElement); 
    }
    imgElement.src = img;
}