const RickAndMorty = ["https://embed.wave.video/U0ADydR2Xlsa4M8Z","https://embed.wave.video/szETBpxLiCE1cJCm"];

function index() {
    window.location.assign("index.html");
}

function home() {
    window.location.assign("VideoPlayer.html");
}

if (window.localStorage.getItem("CurrentEpisode")) {
    Episode = window.localStorage.getItem("CurrentEpisode");
}else {
    Episode = "https://embed.wave.video/U0ADydR2Xlsa4M8Z";
}

function Page_Load() {
    for (var i = 0; i < RickAndMorty.length; i++) {
        var x = document.createElement("option");
        var v = document.getElementsByClassName("Episodes").item(0).length + 1;
        x.text = "Episode " + v;
        x.value = RickAndMorty[v-1]
        document.getElementsByClassName("Episodes").item(0).appendChild(x);
    }

    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
    document.getElementsByClassName("Episodes").item(0).value = Episode;
}

function Page_Unload() {
    window.localStorage.setItem("CurrentEpisode", Episode)
}

function EpisodeSelect() {
    Episode = document.getElementsByClassName("Episodes").item(0).value;
    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
}

function ShowSelect() {
    if (document.getElementsByClassName("Shows").item(0)) {
        var x = document.createElement("option");
        var v = document.getElementsByClassName("Episodes").item(0).length + 1;
        x.text = "Episode " + v;
        x.value = RickAndMorty[v-1]
        document.getElementsByClassName("Episodes").item(0).appendChild(x);
    }
}