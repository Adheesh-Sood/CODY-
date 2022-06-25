var netMode;

var network;
function net(online) {
    console.log(online)
}
window.addEventListener('load', () => {
    net(navigator.onLine)
    network = navigator.onLine;
    if (network == false) {
        netMode = "offline"
        //................................................................
        document.getElementById("goShare").onclick = function () {
            window.alert("No internet(You need a conection to the internet before using share or view)")
        }
        document.getElementById("goView").onclick = function () {
            window.alert("No internet(You need a conection to the internet before using share or view)")

        }
        //................................................................
    }
    else if (network == true) {
        document.getElementById("goShare").onclick = function () {
            window.location.href = "share.html"
        }
        document.getElementById("goView").onclick = function () {
            document.location.href = "view.html"
        }
        netMode = "online"
    }
    else {
        netMode = "error"
    }
})
document.getElementById("goVid").onclick = function () {
    window.location.href = "videos.html"
}

document.getElementById("goLearn").onclick = function () {
    window.location.href = "learn.html"
}

let statHover = document.getElementById("stat")
statHover.addEventListener('mouseover', function (event) {

    if (network == false) {
        document.getElementById("stat").value = "Offline :("
    }
    else if (network == true) {
        document.getElementById("stat").value = "Online :)"
    }
})
