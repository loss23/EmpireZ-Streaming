const ShowList = {
    "RickAndMorty": ["https://embed.wave.video/U0ADydR2Xlsa4M8Z","https://embed.wave.video/szETBpxLiCE1cJCm"],
    "FamilyGuy": ["https://embed.wave.video/1v3TRgupkK55szpC"]
}

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

if (window.localStorage.getItem("CurrentShow")) {
    Show = window.localStorage.getItem("CurrentShow");
}else {
    Show = "RickAndMorty";
}

function Page_Load() {
    document.getElementsByClassName("Shows").item(0).value = Show;

    for (var i = 0; i < ShowList[Show].length; i++) {
        var x = document.createElement("option");
        var v = document.getElementsByClassName("Episodes").item(0).length + 1;
        x.text = "Episode " + v;
        x.value = ShowList[Show][v-1]
        document.getElementsByClassName("Episodes").item(0).appendChild(x);
    }

    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
    document.getElementsByClassName("Episodes").item(0).value = Episode;
}

function Page_Unload() {
    window.localStorage.setItem("CurrentEpisode", Episode)
    window.localStorage.setItem("CurrentShow", Show)
}

function EpisodeSelect() {
    Episode = document.getElementsByClassName("Episodes").item(0).value;
    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
}

function ShowSelect() {
    Show = document.getElementsByClassName("Shows").item(0).value;
    Episode = ShowList[Show][0];
    document.location.reload(true);
}