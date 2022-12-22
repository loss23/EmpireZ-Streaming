function index() {
    window.location.assign("Empirez.online");
}

function home() {
    window.location.assign("index.html");
}

if (window.localStorage.getItem("CurrentEpisode")) {
    Episode = window.localStorage.getItem("CurrentEpisode");
}else {
    Episode = "https://embed.wave.video/U0ADydR2Xlsa4M8Z";
}

function Page_Load() {
    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
}

function Page_Unload() {
    window.localStorage.setItem("CurrentEpisode", Episode)
}