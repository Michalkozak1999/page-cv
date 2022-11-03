var contenerjump = document.querySelector("#contener")
console.log(contenerjump)
var klocek = document.querySelector("#klocek")
console.log(klocek)
var block = document.querySelector("#block");
var block2 = document.querySelector("#block2")
var block3 = document.querySelector("#block3")

var start = document.querySelector("#start")
var graj = document.querySelector("#graj")
const przegrales1 = document.querySelector(".przegrales1")


block3.classList.add("pause")
block2.classList.add("pause")
block.classList.add("pause")
contenerjump.classList.add("pause")

start.addEventListener("click", function () {
    block.classList.add("start")
    block3.classList.add("start")
    block2.classList.add("start")
    contenerjump.classList.add("start")
    start.remove("start")
    WORK()
})




function playagain() {



    var play_jescze = document.querySelector(".play_again")
    play_jescze.addEventListener("click", function () {


        block2.classList.add("play_od_nowa")
        block.classList.add("play_od_nowa")
        block3.classList.add("play_od_nowa")
        //block2.classList.remove("pause")
        // block.classList.remove("pause")
        // block2.classList.add("start")
        //block.classList.add("start")

        block2.classList.add("play_od_nowa")
        block.classList.add("play_od_nowa")

    })



}

function jump12() {
    let audioContext = new Audio("mixkit-player-jumping-in-a-video-game-2043.wav");
    audioContext.play()
}




function lose1() {
    let audio1 = new Audio("mixkit-retro-arcade-game-over-470.wav");
    audio1.play()
}



// let oscilator = audioContext.createGain();
// oscilator.connect(audioContext.destination)
// oscilator.type = "sine"
// oscilator.frequency.value = 440;
// GainNode.gain = 1;
// oscilator.start()





function WORK() {




    contenerjump.addEventListener("click", function jump() {
        jump12()
        //console.log("jebac fubu")
        if (klocek.classList != "jumpkolcek") {

            klocek.classList.add("jumpkolcek")
            console.log("XD")
        } else {
            console.log("kucham fubu")
        }
        setTimeout(function () {
            klocek.classList.remove("jumpkolcek")

        }, 500)
    })




    var checkDead = setInterval(function () {





        var ustawienie_klocka = window.getComputedStyle(klocek)
        var wartosc_klocka_left = parseInt(ustawienie_klocka.getPropertyValue("left"))
        var wartosc_klocka_top = parseInt(ustawienie_klocka.getPropertyValue("top"))
        console.log(wartosc_klocka_top)


        //dla bloku 2

        var ustawienie_block2 = window.getComputedStyle(block2)

        var wartosc_blocku2 = parseInt(ustawienie_block2.getPropertyValue("left"))
        ///////////////////////////
        if (wartosc_blocku2 < 100 && wartosc_blocku2 > 80 && wartosc_klocka_top >= 180) {
            block2.classList.remove("start")
            block.classList.remove("start")
            block3.classList.remove("start")
            // block2.style.animation = "none";
            // block2.style.display = "none";
            xd.classList.add("u_lose")
            contenerjump.classList.add("pause")
            contenerjump.classList.remove("start")
            // sprawdz_czas.stop()
            // contenerjump.add("przegrałęs")
            // alert("jestes dzbanem")
            // stopPropagation(checkDead)
            clearInterval(sprawdz_czas)
            graj.classList.add("play_again")
            graj.addEventListener("click", function () {
                location.reload()

            })
            playagain()


            lose1()
            clearInterval(checkDead)

        }

        //console.log( wartosc_klocka_top)
        //console.log(wartosc_klocka_left)
        //dla blocku 1
        var ustawienie_bloku = window.getComputedStyle(block)
        var wartosc_bloku = parseInt(ustawienie_bloku.getPropertyValue("left"))
        //////////////////////////////////
        if (wartosc_bloku < 100 && wartosc_bloku > 80 && wartosc_klocka_top >= 150) {
            block.classList.remove("start")
            block2.classList.remove("start")
            xd.classList.add("u_lose")
            block3.classList.remove("start")
            // sprawdz_czas.stop()
            //stopPropagation(checkDead)
            clearInterval(sprawdz_czas)
            graj.classList.add("play_again")
            contenerjump.classList.remove("start")
            contenerjump.classList.add("pause")
            playagain()
            graj.addEventListener("click", function () {
                location.reload()
            })

            lose1()
            clearInterval(checkDead)
        }




        var ustawienie_bloku3 = window.getComputedStyle(block3)
        var wartosc_blocku3 = parseInt(ustawienie_bloku3.getPropertyValue("left"))


        if (wartosc_blocku3 < 100 && wartosc_blocku3 > 80 && wartosc_klocka_top >= 200) {
            block.classList.remove("start")
            block2.classList.remove("start")
            xd.classList.add("u_lose")
            block3.classList.remove("start")
            // sprawdz_czas.stop()
            //stopPropagation(checkDead)
            clearInterval(sprawdz_czas)
            graj.classList.add("play_again")
            contenerjump.classList.remove("start")
            contenerjump.classList.add("pause")
            playagain()
            graj.addEventListener("click", function () {
                location.reload()
            })

            lose1()
            clearInterval(checkDead)
        }



    }, 1)

    var xd = document.querySelector(".xd")

    /////////////////////

    var licznik = document.querySelector(".licznik")
    var licznik1 = 00




    var sprawdz_czas = setInterval(function () {
        licznik.innerHTML = licznik1;
        licznik1++



    }, 50)
}











