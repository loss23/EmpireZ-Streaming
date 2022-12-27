const Login_Data = {
    "loser": {
        password: "A41C4F95E4F8A"
    },
    "eagle": {
        password: "6D98F7B425764"
    },
    "klaw": {
        password: "FNAN23124B531"
    }
}

var old_html = document.body.innerHTML;
var old_head = document.head.innerHTML;

function TryLogin(user,pass) {
    if (Login_Data[user] && pass == Login_Data[user].password) {
        document.body.innerHTML = old_html;
        window.sessionStorage.setItem("admin?","true");
        return true;
    }else {
        window.location.assign("index.html")
        return false;
    }
}


function CheckStatus() {
    if (window.sessionStorage.getItem("admin?")) {

    }else{
        document.body.innerHTML = "<a style='color: red; z-index:25000;'> You really thought you'd get in and steal our shit? Dumbass.</a> <img style='Position:absolute; right:0rem; width:100%; height:102%;' src='src/poland.gif'>";


        setTimeout(() => {
            TryLogin(window.prompt("User: "), window.prompt("Pass: "))
        }, 20);
    }
}

var msg;


function Announce() {
    msg = document.getElementsByClassName("AnnounceInput").item(0).value;
}