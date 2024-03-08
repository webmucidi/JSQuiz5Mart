const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png",sampiyonluk: 16 },
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" ,sampiyonluk: 59},
    { ad: "GALATASARAY", src: "images/galatasaray.png", sampiyonluk: 23},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png", sampiyonluk: 7 },
];

const takim=document.getElementById("takim");
const yildiz=document.getElementById("yildiz");

takim.addEventListener("click",yildizBul);

function yildizBul(){

    yildiz.innerHTML="";

    let rastgeleTakim = Math.floor(Math.random() * takimlar.length);
    takim.src=takimlar[rastgeleTakim].src;

    for(let i=0;i<Math.floor(takimlar[rastgeleTakim].sampiyonluk/5);i++){
        
        const eleman=document.createElement("img");
        yildiz.appendChild(eleman);
        eleman.src="images/star.png";
        eleman.classList.add("star");
    }

    
}