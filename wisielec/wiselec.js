

var tablica = ['TEGUCIGAPLA', 'HONDURAS', 'AFGANISTAN', 'BAHAMY', 'BANGLADESZ', 'BOLIWIA', 'CHILE', 'WARSZAWA', 'DOMINIKANA', 'EGIPT', 'ETIOPIA', 'GWATEMALA']
var math = Math.floor(Math.random() * 11)
var findindex = tablica[math]
var ileskusiles = 1

var haslo = findindex;
var haslo_myslnik = "";
var dlugoschasla = haslo.length;

for (i = 0; i < dlugoschasla; i++) {

    if (haslo.charAt(i) == " ") {
        console.log(haslo.charAt(i))
        haslo_myslnik = haslo_myslnik + " ";
    } else {
        haslo_myslnik = haslo_myslnik + "-";
    }
}


function wpiszhaslo() {
    document.querySelector(".grid_4").innerHTML = haslo_myslnik;
}
wpiszhaslo()

window.onload = zaczynaj;

var literywypis = new Array(35);


literywypis[0] = "A"
literywypis[1] = "Ą"
literywypis[2] = "B"
literywypis[3] = "C"
literywypis[4] = "Ć"
literywypis[5] = "D"
literywypis[6] = "E"
literywypis[7] = "Ę"
literywypis[8] = "F"
literywypis[9] = "G"
literywypis[10] = "H"
literywypis[11] = "I"
literywypis[12] = "J"
literywypis[13] = "K"
literywypis[14] = "L"
literywypis[15] = "Ł"
literywypis[16] = "M"
literywypis[17] = "N"
literywypis[18] = "Ń"
literywypis[19] = "O"
literywypis[20] = "ó"
literywypis[21] = "P"
literywypis[22] = "Q"
literywypis[23] = "R"
literywypis[24] = "S"
literywypis[25] = "Ś"
literywypis[26] = "T"
literywypis[27] = "U"
literywypis[28] = "V"
literywypis[29] = "W"
literywypis[30] = "X"
literywypis[31] = "Y"
literywypis[32] = "Z"
literywypis[33] = "Ź"
literywypis[34] = "Ż"






function zaczynaj() {
    var alfabet = ""


    for (i = 0; i <= 34; i++) {
        var element = "nr" + i;
        alfabet = alfabet + '<div class = "litery" onclick="witam(' + i + ')" id="' + element + '"> ' + literywypis[i] + ' </div>';
    }
    document.querySelector(".grid_6").innerHTML = alfabet;

    wpiszhaslo()
}


String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString()
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1)


}





function witam(nr) {

    var trafiona = false;



    for (i = 0; i < dlugoschasla; i++) {
        if (haslo.charAt(i) == literywypis[nr]) {
            haslo_myslnik = haslo_myslnik.ustawZnak(i, literywypis[nr])
            trafiona = true;
        }
    }




    if (trafiona == true) {

        let element = "nr" + nr;
        document.getElementById(element).style.background = "green";
        document.getElementById(element).style.color = "#00CC00";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.border = "solid rgb(99, 199, 41) 3px";
        document.getElementById(element).style.boxShadow = "0px 0px 10px 0px #00CC00";
        wpiszhaslo()
    }

    if (haslo == haslo_myslnik) {
        console.log("jebac fubu")
        document.querySelector(".grid_6").innerHTML = '<li>ZWYCIĘSTWO</li>' + '<br/>' + '<br/><br/><span class = "reset" onclick="location.reload()">JESZCZE RAZ?</span>'

    }

    if (trafiona == false) {
        let element = "nr" + nr;
        document.getElementById(element).style.background = "rgb(211, 147, 147)";
        document.getElementById(element).style.color = "rgb(251, 0, 0)";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.border = "solid rgb(105, 15, 15) 3px";
        document.getElementById(element).style.boxShadow = "0px 0px 10px 0px rgb(251, 0, 0)";
        document.getElementById(element).setAttribute("onclick", ";")
        ileskusiles++

        if (ileskusiles >= 10) {
            document.querySelector(".grid_6").innerHTML = '<li>PORAŻKAAAA</li>' + '<br/>' + '<br/><br/><span class = "reset" onclick="location.reload()">JESZCZE RAZ?</span>'

            ileskusiles = 10
        }

        var obraz = "zdjecia_wisielec/s" + ileskusiles + ".png";
        document.querySelector(".grid_5").innerHTML = '<img src="' + obraz + '"alt="" />'






    }
}


var sprawdzam = document.querySelector(".grid_6")
console.log(sprawdzam)