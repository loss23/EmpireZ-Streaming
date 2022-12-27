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

            const request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/1057196674411397140/nG1SbVUE96If4Ayy99qvd4n9kQGGFeHTHC-y8sQscjG2fbaQzktzp8CVzfX5e8RFfWsH");
            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                username: "Admin Panel Logger",
                avatar_url: "",
                content: "```Flagged Incorrect Login - Code: 401```",
            }

            request.send(JSON.stringify(params));
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
    const request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/1057203387986345998/vAfUupic5JG2UoM85h1bNq3HAjcrFKQJpNpi2_9KNserSzQ5--20DlkzC3V3vrGYTG-c");
            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                username: "~ Admin Panel ~",
                avatar_url: "",
                content: "@everyone" + "``` " + msg + " ```"

            }

            request.send(JSON.stringify(params));
}