let btn = document.getElementById("convert");

btn.addEventListener('click', short);


async function short(){
    let oldURL = document.getElementById("oldurl").value;
    var URL=oldURL.startsWith("http://") || oldURL.startsWith("https://") || oldURL.startsWith("ftp://");
    if(!URL){
       alert('Sorry! Wrong Url');
       location.reload();
    }
    let newURL = document.getElementById("newurl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${oldURL}`);
    const data = await result.json();

    newURL.value = data.result.short_link;
}


let shortURL = document.getElementById("newurl");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    shortURL.select();

    window.navigator.clipboard.writeText(shortURL.value);
}
