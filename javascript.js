

const adjektiivit = [
    "iso",
    "pieni",
    "makea",
    "suolainen",
    "pippurinen"
];

punctuations=[".","!","?"];

function tiedosto(){
    fetch("adj.txt").then(function(response){
        console.log(response);
    })
}

function kayLapi() {
    tiedosto();
    var x = document.getElementById("tarina").value;
    var y = document.getElementById("lopullinenTarina");
    var m = document.getElementById("korvaus").value;
    y.value = "";
    var isoAlku = true;
    var k;
    for (let i=0; i < x.length; i++){
        console.log(isoAlku);
        if (punctuations.includes(x[i])) {
            isoAlku = true;
            y.value+=x[i];
            continue;
        }
        if (x[i] == m) {
            k = adjektiivit[Math.floor(Math.random() * adjektiivit.length)];
            if (isoAlku) {
                ekak = k[0].toUpperCase()
                for (j=1; j < k.length; j++) {
                    ekak += k[j];
                }
                k = ekak;
                isoAlku = false;
            }
        }
        else {
            k = x[i];
            if (isoAlku && k!= " ") {
                k = k.toUpperCase();
                isoAlku = false;
            }
        }   
        y.value+=k;
    }
}