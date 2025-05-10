let btn_close = document.getElementById("btn_close"); 
let filepicker = document.getElementById("filepicker");
let btn_github = document.getElementById("btn_github");

btn_close.addEventListener("click", ()=>{close()});
btn_github.addEventListener("click", function(){chrome.tabs.create({active: true, url: "https://alefouau.github.io"})});

filepicker.addEventListener('change', (e)=>{
    var reader = new FileReader();
    reader.onloadend = ()=>{
        result = reader.result;
        chrome.storage.local.set({img: result});
        chrome.tabs.query({"url":"https://www.facebook.com/*"}).then(tab=>{
            console.log(tab);
            chrome.scripting.executeScript(
                {
                    target: {tabId: tab[0].id},
                    func: injectjs,
                    args: [result]
                }
            );
        });
    };
    reader.readAsDataURL(e.target.files[0]); 
})

function injectjs(imgData){
    fbcgApplyBackground(imgData);
}
