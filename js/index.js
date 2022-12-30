const DataBase = {
    "Shows": {
        "RickAndMorty": {
            "1": ["https://s3.tebi.io/index/RickAndMorty%20Ep1.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep2.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep3.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep4.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep5.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep6.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep7.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep8.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep9.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep10.mp4", "https://s3.tebi.io/index/RickAndMorty%20Ep11.mp4"]
        },
        "FamilyGuy": {
            "1" : ["https://s3.tebi.io/index/FamilyGuy1.mp4", "https://s3.tebi.io/index/FamilyGuy2.mp4"]
        },
        "Spongebob": {
            "1" : ["https://s3.tebi.io/index/Spongebob%20Ep1.mp4","https://s3.tebi.io/index/Spongebob%20Ep2.mp4","https://s3.tebi.io/index/Spongebob%20Ep3.mp4","https://s3.tebi.io/index/Spongebob%20Ep4.mp4","https://s3.tebi.io/index/Spongebob%20Ep5.mp4","https://s3.tebi.io/index/Spongebob%20Ep6.mp4","https://s3.tebi.io/index/Spongebob%20Ep7.mp4","https://s3.tebi.io/index/Spongebob%20Ep8.mp4","https://s3.tebi.io/index/Spongebob%20Ep9.mp4","https://s3.tebi.io/index/Spongebob%20Ep10.mp4","https://s3.tebi.io/index/Spongebob%20Ep11.mp4","https://s3.tebi.io/index/Spongebob%20Ep12.mp4","https://s3.tebi.io/index/Spongebob%20Ep13.mp4","https://s3.tebi.io/index/Spongebob%20Ep14.mp4","https://s3.tebi.io/index/Spongebob%20Ep15.mp4","https://s3.tebi.io/index/Spongebob%20Ep16.mp4","https://s3.tebi.io/index/Spongebob%20Ep17.mp4","https://s3.tebi.io/index/Spongebob%20Ep18.mp4","https://s3.tebi.io/index/Spongebob%20Ep19.mp4", "https://s3.tebi.io/index/Spongebob%20Ep20.mp4"],
            "2" : ["https://s3.tebi.io/index/SpongebobSeason2Ep1A.mp4"]
        }
    },
    "Movies": {
        "Spongebob": "https://s3.tebi.io/index/Spongebob/SpongebobMovie.mp4"
    }
}

AdminTouches = 10;

document.addEventListener("keydown", function(e){
    if (e.key == 'q' && window.location.pathname !== "Pages" && AdminTouches < 1 && window.confirm("Did you mean to access the admin panel?")) {
        window.location.assign("Pages/admin.html");
    }else if (AdminTouches > 0) {
        AdminTouches -= 1;
        console.log(AdminTouches);
    }
});

function index() {
    window.location.assign("../Pages/index.html");
}

function home() {
    window.location.assign("../Pages/VideoPlayer.html");
}

function info() {
    window.location.assign("../Pages/info.html");
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
    Movie = window.localStorage.getItem("CurrentMovie");
}else {
    Movie = "Spongebob"
}


function Page_Load2() {
    document.getElementsByClassName("Movies").item(0).value = Movie;
    document.getElementsByClassName("VideoPlayer").item(0).src = DataBase["Movies"][Movie];

    document.getElementsByClassName("VideoPlayer").item(0).currentTime = window.localStorage.getItem("MovieTime");
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
    window.localStorage.setItem("CurrentMovie", Movie);
    window.localStorage.setItem("MovieTime", document.getElementsByClassName("VideoPlayer").item(0).currentTime);
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
    Movie = document.getElementsByClassName("Movies").item(0).value;
    window.localStorage.setItem("CurrentMovie", Movie);
    window.localStorage.setItem("MovieTime", 0);
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