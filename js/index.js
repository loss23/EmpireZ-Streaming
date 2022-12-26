const DataBase = {
    "Shows": {
        "RickAndMorty": {
            "1": ["https://embed.wave.video/U0ADydR2Xlsa4M8Z", "https://embed.wave.video/szETBpxLiCE1cJCm"]
        },
        "FamilyGuy": {
            "1" : ["https://embed.wave.video/1v3TRgupkK55szpC", "https://embed.wave.video/1f6rtAHOBbGs3BG7"]
        },
        "Spongebob": {
            "1" : ["https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep1.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep2.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep3.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep4.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep5.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep6.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep7.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep8.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep9.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep10.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep11.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep12.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep13.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep14.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep15.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep16.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep17.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep18.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep19.mp4", "https://filebin.net/xrd6axgrzvozhila/Spongebob_Ep20.mp4"]
        }
    },
    "Movies": {
        "Spongebob": ["https://udisk16.watchanimesub.net/getvid?evid=S5f9LvR43OCxMS4YAHCUyAzHa1T2likKYJKWdYtQxkNHkKSaQc_2ajoC0L8Dxa9_Ugt7B2tfmOAmTKQ6n-otLctFCfflGGXPB3xo-rl4pmrMLq70Pe2G7GmSsZvjdfeiQ7Z8eekYLdSOfu4UfG9AQhwP4ZSaeG80PJvH8ghkuZtNP151aA-6xbhUGQcXwLg6IhLTzbvqmtR0t_kcknyBSuk5HZVyrftzF-aM-HYkJvWvOZfUzg6nq2jp_4Hrd9r7rAVWcwZ2wROo8y8FXJvNhEmobSG1R09IGOXe0LxkrN0DpqmcUouZ9cFGrL5QNm7GttREt37IfvSnM-aBN0YTUheXJXqfjN3StX6_ytwQ0X_oVndG3yvRe2CqEZru8OHiMzbPm1CGlJ2E9ootpmftJhzXPgSccOnBQiRfQ-2qpCi_BpDstFdrgbbq304v_UYf"]
    }
}


function index() {
    window.location.assign("index.html");
}

function home() {
    window.location.assign("VideoPlayer.html");
}

function info() {
    window.location.assign("info.html");
}

if (window.localStorage.getItem("CurrentEpisode")) {
    Episode = window.localStorage.getItem("CurrentEpisode");
    EpNumber = window.localStorage.getItem("CurrentEpisodeNumber");
}else {
    Episode = DataBase["Shows"]["RickAndMorty"]["1"][1]
    EpNumber = 0
}

if (window.localStorage.getItem("CurrentShow")) {
    Show = window.localStorage.getItem("CurrentShow");
}else {
    Show = "RickAndMorty";
}

if (window.localStorage.getItem("CurrentSeason")) {
    Season = window.localStorage.getItem("CurrentSeason");
}else {
    Season = "1";
}

if (window.localStorage.getItem("CurrentMovie")) {
    Movie = DataBase["Movies"][window.localStorage.getItem("CurrentMovie")];
}else {
    Movie = DataBase["Movies"]["Spongebob"];
}


function Page_Load2() {
    document.getElementsByClassName("Movies").item(0).value = DataBase["Movies"][Movie];
}


function Page_Load() {
    document.getElementsByClassName("Shows").item(0).value = Show;

    for (var i = 0; i < Object.keys(DataBase["Shows"][Show]).length; i++) {
        var x = document.createElement("option");
        var v = document.getElementsByClassName("Seasons").item(0).length + 1;
        x.text = "Season " + v;
        x.value = v;
        document.getElementsByClassName("Seasons").item(0).appendChild(x);
    }

    for (var i = 0; i < DataBase["Shows"][Show][Season].length; i++) {
        var x = document.createElement("option");
        var v = document.getElementsByClassName("Episodes").item(0).length + 1;
        x.text = "Episode " + v;
        x.value = DataBase["Shows"][Show][Season][v-1]
        document.getElementsByClassName("Episodes").item(0).appendChild(x);
    }

    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
    document.getElementsByClassName("Episodes").item(0).value = Episode;
    document.getElementsByClassName("Seasons").item(0).value = Season;
    document.getElementsByClassName("VideoPlayer").item(0).currentTime = localStorage.getItem("Time");
}

function Page_Unload() {
    window.localStorage.setItem("CurrentEpisode", Episode)
    window.localStorage.setItem("CurrentShow", Show)
    window.localStorage.setItem("CurrentSeason", Season)
    window.localStorage.setItem("Time", document.getElementsByClassName("VideoPlayer").item(0).currentTime);
    window.localStorage.setItem("CurrentEpisodeNumber", EpNumber);
}

function Page_Unload2() {
    Movie = document.getElementsByClassName("Movie").item(0).value;
    window.localStorage.setItem("CurrentMovie", Movie)
}

function EpisodeSelect() {
    Episode = document.getElementsByClassName("Episodes").item(0).value;
    EpNumber = DataBase["Shows"][Show][Season].indexOf(Episode);
    document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
    window.localStorage.setItem("Time", 0)
    window.localStorage.setItem("CurrentEpisodeNumber", EpNumber)
}

function ShowSelect() {
    Show = document.getElementsByClassName("Shows").item(0).value;
    Season = "1";
    Episode = DataBase["Shows"][Show][Season][0];
    window.localStorage.setItem("Time", 0)
    document.location.reload(true);
}

function SeasonSelect() {
    Season = document.getElementsByClassName("Seasons").item(0).value;
    Episode = DataBase["Shows"][Show][Season][0];
    window.localStorage.setItem("Time", 0)
    document.location.reload(true);
}

function MovieSelect() {
    Movie = DataBase["Movies"][document.getElementsByClassName("Movies").item(0).value];
    window.localStorage.setItem("CurrentMovie", Movie)
    window.localStorage.setItem("Time", 0)
    document.location.reload(true);
}

function EpisodeEnd() {
    document.getElementsByClassName("Popup").item(0).style.display = "block";
    setTimeout(() => {
        EpNumber++;
        Episode = DataBase["Shows"][Show][Season][EpNumber];
        document.getElementsByClassName("VideoPlayer").item(0).src = Episode;
        window.localStorage.setItem("Time", 0)
        document.getElementsByClassName("Episodes").item(0).value = Episode;
        document.getElementsByClassName("Popup").item(0).style.display = "none";
    }, 4000);
}