function addSite() {
    if (document.getElementById("siteInputBox").value != "") {
        var x = document.getElementById("siteSelect");
        var option = document.createElement("option");
        option.text = document.getElementById("siteInputBox").value;
        x.add(option);
        document.getElementById("siteInputBox").value = "";
    }
}

function deleteSite() {
    var x = document.getElementById("siteSelect");
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected) {
            x.options[i].remove();
        }
    }
}

function addPattern() {
    var qual = document.getElementById("patternQualInputBox").value;
    var old = document.getElementById("patternOldInputBox").value;
    var newb = document.getElementById("patternNewInputBox").value;
    if (qual != "" && old != "" && newb != "") {
        var x = document.getElementById("patternSelect");
        var option = document.createElement("option");
        option.text = qual + "|" + old + "|" + newb;
        x.add(option);
        document.getElementById("patternQualInputBox").value = "";
        document.getElementById("patternOldInputBox").value = "";
        document.getElementById("patternNewInputBox").value = "";
    }
    else {
        window.alert("Uh oh!\nAll of the \"text\" boxes need information.")
    }

}

function deletePattern() {
    var x = document.getElementById("patternSelect");
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected) {
            x.options[i].remove();
        }
    }
}

function newID() {
    var date = new Date();
    var components = [date.getYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
    var id = components.join("");
    document.getElementById("idInputBox").value = id;
}

function clearID() {
    document.getElementById("idInputbox").value = "";
}