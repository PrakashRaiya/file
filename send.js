function runscript() {setTimeout(function () {
        document.querySelector('#pane-side span[data-testid="default-group"][data-icon="default-group"]') ? startTimer() : ( console.log("%c---------------------------------\nCongratulations Work Is Complete\n---------------------------------", "color:black; font-size:medium; font-weight:bold")/*, document.body.style.zoom = "100%", document.getElementById("app").style.height = "100%"*/)
    }, 100)
}

function startTimer() {
    var e, t = document.querySelector('#pane-side span[data-testid="default-group"][data-icon="default-group"]');

    function n() {
        var e = document.querySelector('header._1-qgF span[dir="auto"]'),
            t = document.querySelector('header._1-qgF span[dir="auto"]').getAttribute("title"),
            a = document.querySelector("div._11liR").innerText.split(matchmessage).join(" matchmessagekk ");
        new RegExp("\\bmatchmessagekk\\b").test(a) ? (console.log("%c Already:" + e.getAttribute("title"), "color:green; font-size:medium; font-weight:bold"),runscript()) : document.querySelectorAll("footer._3uxr9 [contenteditable='true']")[0] ? (n = document.querySelectorAll("[contenteditable='true']")[1], event = document.createEvent("UIEvents"), n.innerHTML = message, event.initUIEvent("input", !0, !0, window, 1), n.dispatchEvent(event), o(document.querySelector('span[data-icon="send"]'), "click"), console.log("%cSend: " + e.getAttribute("title"), "color:blue; font-size:medium; font-weight:bold"), document.querySelectorAll("footer._3uxr9")[0].removeAttribute("class"), document.getElementById("Sendmessagedatabase").value += "\n" + t, updatedatabase()) : (console.log("%cNot: " + e.getAttribute("title"), "color:red; font-size:medium;font-weight:bold"),runscript())
    }(e = document.createEvent("MouseEvents")).initEvent("mousedown", !0, !0), t.dispatchEvent(e), document.querySelector('#pane-side span[data-testid="default-group"][data-icon="default-group"]').removeAttribute("data-icon"), setTimeout(function () {
        var e = document.querySelector('header._1-qgF span[dir="auto"]').getAttribute("title"),
            t = document.querySelector('header._1-qgF span[dir="auto"]').getAttribute("title"),
            e = document.querySelector("#Sendmessagedatabase").value.split(e).join(" Sendmessagedatabasematch ");
        new RegExp("\\bSendmessagedatabasematch\\b").test(e) ? (console.log("%c Database:" + t, "color:green;font-size:medium;font-weight:bold"),runscript()) : n()
    }, 0);
    var o = (e, t) => {
        var a = document.createEvent("MouseEvents");
        a.initMouseEvent(t, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(a),runscript()
    }
}

function myFunc() {
    var t = document.querySelector('[title="' + name + '"]');
    (e = document.createEvent("MouseEvents")).initEvent("mousedown", !0, !0), t.dispatchEvent(e), setTimeout(function () {
        document.querySelector('#pane-side ._2Z4DV._2GVnY span[data-testid="default-group"][data-icon="default-group"]').removeAttribute("data-icon"), document.getElementById("Sendmessagedatabase").value += "\n" + name
    }, 200)
}
/*document.body.style.zoom = ".0000000001%", document.getElementById("app").style.height = "99999999999999999999%",*/ function startfun() {alert("Main Script Install.");
var x = document.createElement("textarea");
x.id = "Sendmessagedatabase", document.body.appendChild(x);
var scopedStyle = document.createElement("style");
scopedStyle.innerText = "#app, body, html {overflow: auto!important;height:auto!important}textarea#Sendmessagedatabase,textarea#customconsole{position: fixed;z-index: 99999;}._1gL0z{position:initial!important;}", document.body.appendChild(scopedStyle), null != localStorage.getItem("groupnamecontent") && ("y" == (prompt("Old Database Found, for Clear type: y", "")) ? (localStorage.removeItem("groupnamecontent"), alert("All Database Clear successfully.")) : setTimeout(function () {document.getElementById("Sendmessagedatabase").value += "\n" + localStorage.getItem("groupnamecontent") }, 0))};function updatedatabase() {
    var e = document.getElementById("Sendmessagedatabase");
    localStorage.setItem("groupnamecontent", e.value)
}
var run = document.createElement("div");
run.innerHTML = '<a href="Javascript:startfun()" title="Run Script" style="border-radius: 4px;position: fixed;z-index: 99999;background: #d3eebe;color: #000;font-size: 12px;padding: 5px 10px;border: 1px solid #aaa;">Run Script</a>', document.body.appendChild(run);
