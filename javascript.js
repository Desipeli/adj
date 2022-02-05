

const adjektiivit = [
    "viehkeä",
    "kaunis",
    "inhottava",
    "typerä",
    "houkuttava",
    "koukuttava",
    "tyrmäävä",
    "lihava",
    "suuri",
    "rajoittunut",
    "sievä",
    "miellyttävä",
    "säyseä",
    "ällöttävä",
    "oksettava",
    "mukava",
    "turhamainen",
    "pilkullinen",
    "oikukas",
    "kapea",
    "puristeltava",
    "littana",
    "pyöreä",
    "haiseva",
    "karvainen",
    "kurvikas",
    "lattea",
    "likainen",
    "söpö",
    "viehättävä",
    "rehevä",
    "timmi",
    "kärsivä",
    "kurainen",
    "iloinen",
    "pursuava",
    "kohtelias",
    "hävytön",
    "huomionhakuinen",
    "tyrkky",
    "kainosteleva",
    "rupinen",
    "hölmö",
    "hullu",
    "ahne",
    "pihi",
    "hupsu",
    "höpsö",
    "töhö",
    "rikas",
    "rakas",
    "köyhä",
    "löysä",
    "löllö",
    "kireä",
    "rämisevä",
    "viekas",
    "valoisa",
    "voimaton",
    "voimakas",
    "raamikas",
    "kaheli",
    "tukahduttava",
    "suppea",
    "turpea",
];

const punctuations=[".","!","?"];


function kayLapi() {
    var x = document.getElementById("tarina").value;
    var y = document.getElementById("lopullinenTarina");
    var m = document.getElementById("korvaus").value;
    y.value = "";
    var isoAlku = true;
    var k;
    for (let i=0; i < x.length; i++){
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