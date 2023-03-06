let createmorebutton = document.getElementsByClassName("createmorebutton")[0]
let submitbutton = document.getElementsByClassName("submitbutton")[0]
let jobroletext = document.getElementsByClassName("jobroletext")[0]
let companynameinputareatext = document.getElementById("companyname")
let jobrole = document.querySelector('#jobrole');
let companynametext = document.getElementsByClassName("companynametext")[0]
let workinghoursdiv = document.getElementsByClassName("workinghoursdiv")[0]
let workinghours = document.getElementById("workinghours")
let postedtimeagodiv = document.getElementsByClassName("postedtimeagodiv")[0]
let joblocationdiv = document.getElementsByClassName("joblocationdiv")[0]
let joblocation = document.getElementById("joblocation")
let htmlskilldiv = document.getElementsByClassName("htmlskilldiv")[0]
let cssskilldiv = document.getElementsByClassName("cssskilldiv")[0]
let javascriptskilldiv = document.getElementsByClassName("javascriptskilldiv")[0]
let reactjsskilldiv = document.getElementsByClassName("reactjsskilldiv")[0]
let nodejsskilldiv = document.getElementsByClassName("nodejsskilldiv")[0]
let nextjsskilldiv = document.getElementsByClassName("nextjsskilldiv")[0]
let angularjsskilldiv = document.getElementsByClassName("angularjsskilldiv")[0]
let vuejsskilldiv = document.getElementsByClassName("vuejsskilldiv")[0]
let expressjsskilldiv = document.getElementsByClassName("expressjsskilldiv")[0]
let advancedjavascriptskilldiv = document.getElementsByClassName("advancedjavascriptskilldiv")[0]
let phpskilldiv = document.getElementsByClassName("phpskilldiv")[0]
let laravelskilldiv = document.getElementsByClassName("laravelskilldiv")[0]
let flutterskilldiv = document.getElementsByClassName("flutterskilldiv")[0]
let apiskilldiv = document.getElementsByClassName("apiskilldiv")[0]
let cskilldiv = document.getElementsByClassName("cskilldiv")[0]
let csharpskilldiv = document.getElementsByClassName("csharpskilldiv")[0]
let cplusplusskilldiv = document.getElementsByClassName("cplusplusskilldiv")[0]
let javaskilldiv = document.getElementsByClassName("javaskilldiv")[0]
let githubskilldiv = document.getElementsByClassName("githubskilldiv")[0]
let pythonskilldiv = document.getElementsByClassName("pythonskilldiv")[0]
let djangoskilldiv = document.getElementsByClassName("djangoskilldiv")[0]
let sqlskilldiv = document.getElementsByClassName("sqlskilldiv")[0]
let mongodbskilldiv = document.getElementsByClassName("mongodbskilldiv")[0]
let html = document.getElementById("html")
let css = document.getElementById("css")
let javascript = document.getElementById("javascript")
let reactjs = document.getElementById("reactjs")
let nodejs = document.getElementById("nodejs")
let nextjs = document.getElementById("nextjs")
let angularjs = document.getElementById("angularjs")
let vuejs = document.getElementById("vuejs")
let expressjs = document.getElementById("expressjs")
let advancedjavascript = document.getElementById("advancedjavascript")
let php = document.getElementById("php")
let laravel = document.getElementById("laravel")
let flutter = document.getElementById("flutter")
let api = document.getElementById("api")
let c = document.getElementById("c")
let csharp = document.getElementById("csharp")
let cplusplus = document.getElementById("cplusplus")
let java = document.getElementById("java")
let github = document.getElementById("github")
let python = document.getElementById("python")
let django = document.getElementById("django")
let sql = document.getElementById("sql")
let mongodb = document.getElementById("mongodb")
let customjoblist = document.getElementsByClassName("customjoblist")[0]
let overlay = document.getElementsByClassName("overlay")[0]
let jobrolealert = document.getElementsByClassName("jobrolealert")[0]
let companynamealert = document.getElementsByClassName("companynamealert")[0]
let workinghoursalert = document.getElementsByClassName("workinghoursalert")[0]
let joblocationalert = document.getElementsByClassName("joblocationalert")[0]
let requiredskillslessalert = document.getElementsByClassName("requiredskillslessalert")[0]
let requiredskillsmorealert = document.getElementsByClassName("requiredskillsmorealert")[0]


function createmoref() {
    location.assign("datainput.html")
}
function myFunction() {
    if (html.checked == true) {
        localStorage.setItem("htmlkey", true)
    } else {
        localStorage.setItem("htmlkey", false)
    }
    if (css.checked == true) {
        localStorage.setItem("csskey", true)
    } else {
        localStorage.setItem("csskey", false)
    }
    if (javascript.checked == true) {
        localStorage.setItem("javascriptkey", true)
    } else {
        localStorage.setItem("javascriptkey", false)
    }
    if (reactjs.checked == true) {
        localStorage.setItem("reactjskey", true)
    } else {
        localStorage.setItem("reactjskey", false)
    }
    if (nodejs.checked == true) {
        localStorage.setItem("nodejskey", true)
    } else {
        localStorage.setItem("nodejskey", false)
    }
    if (nextjs.checked == true) {
        localStorage.setItem("nextjskey", true)
    } else {
        localStorage.setItem("nextjskey", false)
    }
    if (angularjs.checked == true) {
        localStorage.setItem("angularjskey", true)
    } else {
        localStorage.setItem("angularjskey", false)
    }
    if (vuejs.checked == true) {
        localStorage.setItem("vuejskey", true)
    } else {
        localStorage.setItem("vuejskey", false)
    }
    if (expressjs.checked == true) {
        localStorage.setItem("expressjskey", true)
    } else {
        localStorage.setItem("expressjskey", false)
    }
    if (advancedjavascript.checked == true) {
        localStorage.setItem("advancedjavascriptkey", true)
    } else {
        localStorage.setItem("advancedjavascriptkey", false)
    }
    if (php.checked == true) {
        localStorage.setItem("phpkey", true)
    } else {
        localStorage.setItem("phpkey", false)
    }
    if (laravel.checked == true) {
        localStorage.setItem("laravelkey", true)
    } else {
        localStorage.setItem("laravelkey", false)
    }
    if (flutter.checked == true) {
        localStorage.setItem("flutterkey", true)
    } else {
        localStorage.setItem("flutterkey", false)
    }
    if (api.checked == true) {
        localStorage.setItem("apikey", true)
    } else {
        localStorage.setItem("apikey", false)
    }
    if (c.checked == true) {
        localStorage.setItem("ckey", true)
    } else {
        localStorage.setItem("ckey", false)
    }
    if (csharp.checked == true) {
        localStorage.setItem("csharpkey", true)
    } else {
        localStorage.setItem("csharpkey", false)
    }
    if (cplusplus.checked == true) {
        localStorage.setItem("cpluspluskey", true)
    } else {
        localStorage.setItem("cpluspluskey", false)
    }
    if (java.checked == true) {
        localStorage.setItem("javakey", true)
    } else {
        localStorage.setItem("javakey", false)
    }
    if (github.checked == true) {
        localStorage.setItem("githubkey", true)
    } else {
        localStorage.setItem("githubkey", false)
    }
    if (python.checked == true) {
        localStorage.setItem("pythonkey", true)
    } else {
        localStorage.setItem("pythonkey", false)
    }
    if (django.checked == true) {
        localStorage.setItem("djangokey", true)
    } else {
        localStorage.setItem("djangokey", false)
    }
    if (sql.checked == true) {
        localStorage.setItem("sqlkey", true)
    } else {
        localStorage.setItem("sqlkey", false)
    }
    if (mongodb.checked == true) {
        localStorage.setItem("mongodbkey", true)
    } else {
        localStorage.setItem("mongodbkey", false)
    }
    let htmlint=html.checked ? 1 : 0
    let cssint=css.checked ? 1 : 0
    let javascriptint=javascript.checked ? 1 : 0
    let reactint=reactjs.checked ? 1 : 0
    let nodejsint=nodejs.checked ? 1 : 0
    let nextjsint=nextjs.checked ? 1 : 0
    let angularjsint=angularjs.checked? 1 : 0
    let vuejsint=vuejs.checked?1:0
    let expressjsint=expressjs.checked?1:0
    let advancedjavascriptint=advancedjavascript.checked?1:0
    let phpint=php.checked?1:0
    let laravelint=laravel.checked?1:0
    let flutterint=flutter.checked?1:0
    let apiint=api.checked?1:0
    let cint=c.checked?1:0
    let csharpint=csharp.checked?1:0
    let cplusplusint=cplusplus.checked?1:0
    let javaint=java.checked?1:0
    let githubint=github.checked?1:0
    let pythonint=python.checked?1:0
    let djangoint=django.checked?1:0
    let sqlint=sql.checked?1:0
    let mongobdint=mongodb.checked?1:0
    let totalint=htmlint+cssint+javascriptint+reactint+nodejsint+nextjsint+angularjsint+vuejsint+expressjsint+advancedjavascriptint+phpint+laravelint+flutterint+apiint+cint+csharpint+cplusplusint+javaint+githubint+pythonint+djangoint+sqlint+mongobdint
    localStorage.setItem("totalintkey", totalint)
    console.log(totalint)
}

function cancelf() {
    location.assign("index.html")
    localStorage.clear()
    overlay.style.display = "none"
}
// function myFunctionone(){
//     let htmlvariable=html.checked ? 1 : 0
//     console.log(htmlvariable)
// }
function submitf() {
    let jobrolevaluevariable = jobrole.value;
    let companynameinputareatextvariable = companyname.value
    let workinghoursvariable = workinghours.value
    let joblocationvariable = joblocation.value
    if (!companynameinputareatextvariable) {
        companynamealert.style.display = "block"
        jobrolealert.style.display = "none"
        workinghoursalert.style.display = "none"
        joblocationalert.style.display = "none"
    } else if ((jobrolevaluevariable) == "none") {
        jobrolealert.style.display = "block"
        companynamealert.style.display = "none"
        workinghoursalert.style.display = "none"
        joblocationalert.style.display = "none"
    } else if ((workinghoursvariable) == "none") {
        workinghoursalert.style.display = "block"
        companynamealert.style.display = "none"
        jobrolealert.style.display = "none"
        joblocationalert.style.display = "none"
    } else if ((joblocationvariable) == "none") {
        joblocationalert.style.display = "block"
        companynamealert.style.display = "none"
        jobrolealert.style.display = "none"
        workinghoursalert.style.display = "none"
    } else if((localStorage.getItem("totalintkey"))<3){
        requiredskillslessalert.style.display="block"
        joblocationalert.style.display = "none"
        companynamealert.style.display = "none"
        jobrolealert.style.display = "none"
        workinghoursalert.style.display = "none"
        requiredskillsmorealert.style.display="none"
    }else if((localStorage.getItem("totalintkey"))>8){
        requiredskillslessalert.style.display="none"
        requiredskillsmorealert.style.display="block"
        joblocationalert.style.display = "none"
        companynamealert.style.display = "none"
        jobrolealert.style.display = "none"
        workinghoursalert.style.display = "none"
    }else {
        let submittdate = new Date();
        let submitmonth = submittdate.getUTCMonth() + 1
        let submitday = submittdate.getUTCDate();
        let submityear = submittdate.getUTCFullYear()
        let submitDateObjj = `${submityear}-${submitmonth}-${submitday}`
        localStorage.setItem("jobrolekey", jobrolevaluevariable)
        localStorage.setItem("companynameinputareatextkey", companynameinputareatextvariable)
        localStorage.setItem("submitdatekey", submitDateObjj)
        localStorage.setItem("submitdaykey", submitday)
        localStorage.setItem("workinghourskey", workinghoursvariable)
        localStorage.setItem("joblocationkey", joblocationvariable)
        localStorage.setItem("zz", 1)
        // console.log(joblocationvariable)
        location.assign("index.html")
    }
}
function onloadd() {
    if ((localStorage.getItem("zz")) == 1) {
        overlay.style.display = "flex"
        localStorage.setItem("zz", 0)
    }
}
function areusureuwanttopostajobf() {
    setTimeout(() => {
        customjoblist.style.display = "flex"
        overlay.style.display = "none"
        createmorebutton.style.display="none"
        jobroletext.textContent = localStorage.getItem("jobrolekey")
        companynametext.textContent = localStorage.getItem("companynameinputareatextkey")
        workinghoursdiv.textContent = localStorage.getItem("workinghourskey")
        joblocationdiv.textContent = localStorage.getItem("joblocationkey")
        postedtimeagodiv.textContent = `${totalDays}d ago`
        // console.log(localStorage.getItem("htmlkey"))
        // HTML
        if ((localStorage.getItem("htmlkey")) == "true") {
            htmlskilldiv.style.display = "block"
        } else if ((localStorage.getItem("htmlkey")) == "false") {
            htmlskilldiv.style.display = "none"
        }
        // CSS
        if ((localStorage.getItem("csskey")) == "true") {
            cssskilldiv.style.display = "block"
        } else if ((localStorage.getItem("csskey")) == "false") {
            cssskilldiv.style.display = "none"
        }
        // JAVASCRIPT
        if ((localStorage.getItem("javascriptkey")) == "true") {
            javascriptskilldiv.style.display = "block"
        } else if ((localStorage.getItem("javascriptkey")) == "false") {
            javascriptskilldiv.style.display = "none"
        }
        // REACT JS
        if ((localStorage.getItem("reactjskey")) == "true") {
            reactjsskilldiv.style.display = "block"
        } else if ((localStorage.getItem("reactjskey")) == "false") {
            reactjsskilldiv.style.display = "none"
        }
        // NODE JS
        if ((localStorage.getItem("nodejskey")) == "true") {
            nodejsskilldiv.style.display = "block"
        } else if ((localStorage.getItem("nodejskey")) == "false") {
            nodejsskilldiv.style.display = "none"
        }
        // NEXT JS
        if ((localStorage.getItem("nextjskey")) == "true") {
            nextjsskilldiv.style.display = "block"
        } else if ((localStorage.getItem("nextjskey")) == "false") {
            nextjsskilldiv.style.display = "none"
        }
        // ANGULAR JS
        if ((localStorage.getItem("angularjskey")) == "true") {
            angularjsskilldiv.style.display = "block"
        } else if ((localStorage.getItem("angularjskey")) == "false") {
            angularjsskilldiv.style.display = "none"
        }
        // VUE JS
        if ((localStorage.getItem("vuejskey")) == "true") {
            vuejsskilldiv.style.display = "block"
        } else if ((localStorage.getItem("vuejskey")) == "false") {
            vuejsskilldiv.style.display = "none"
        }
        // EXPRESS JS
        if ((localStorage.getItem("expressjskey")) == "true") {
            expressjsskilldiv.style.display = "block"
        } else if ((localStorage.getItem("expressjskey")) == "false") {
            expressjsskilldiv.style.display = "none"
        }
        // ADVANCED JAVASCRIPT 
        if ((localStorage.getItem("advancedjavascriptkey")) == "true") {
            advancedjavascriptskilldiv.style.display = "block"
        } else if ((localStorage.getItem("advancedjavascriptkey")) == "false") {
            advancedjavascriptskilldiv.style.display = "none"
        }
        // PHP JS
        if ((localStorage.getItem("phpkey")) == "true") {
            phpskilldiv.style.display = "block"
        } else if ((localStorage.getItem("phpkey")) == "false") {
            phpskilldiv.style.display = "none"
        }
        //laravel
        if ((localStorage.getItem("laravelkey")) == "true") {
            laravelskilldiv.style.display = "block"
        } else if ((localStorage.getItem("laravelkey")) == "false") {
            laravelskilldiv.style.display = "none"
        }
        //flutter
        if ((localStorage.getItem("flutterkey")) == "true") {
            flutterskilldiv.style.display = "block"
        } else if ((localStorage.getItem("flutterkey")) == "false") {
            flutterskilldiv.style.display = "none"
        }
        //api
        if ((localStorage.getItem("apikey")) == "true") {
            apiskilldiv.style.display = "block"
        } else if ((localStorage.getItem("apikey")) == "false") {
            apiskilldiv.style.display = "none"
        }
        //c
        if ((localStorage.getItem("ckey")) == "true") {
            cskilldiv.style.display = "block"
        } else if ((localStorage.getItem("ckey")) == "false") {
            cskilldiv.style.display = "none"
        }
        //csharp
        if ((localStorage.getItem("csharpkey")) == "true") {
            csharpskilldiv.style.display = "block"
        } else if ((localStorage.getItem("csharpkey")) == "false") {
            csharpskilldiv.style.display = "none"
        }
        //cplusplus
        if ((localStorage.getItem("cpluspluskey")) == "true") {
            cplusplusskilldiv.style.display = "block"
        } else if ((localStorage.getItem("cpluspluskey")) == "false") {
            cplusplusskilldiv.style.display = "none"
        }
        //java
        if ((localStorage.getItem("javakey")) == "true") {
            javaskilldiv.style.display = "block"
        } else if ((localStorage.getItem("javakey")) == "false") {
            javaskilldiv.style.display = "none"
        }
        //github
        if ((localStorage.getItem("githubkey")) == "true") {
            githubskilldiv.style.display = "block"
        } else if ((localStorage.getItem("githubkey")) == "false") {
            githubskilldiv.style.display = "none"
        }
        //python
        if ((localStorage.getItem("pythonkey")) == "true") {
            pythonskilldiv.style.display = "block"
        } else if ((localStorage.getItem("pythonkey")) == "false") {
            pythonskilldiv.style.display = "none"
        }
        //django
        if ((localStorage.getItem("djangokey")) == "true") {
            djangoskilldiv.style.display = "block"
        } else if ((localStorage.getItem("djangokey")) == "false") {
            djangoskilldiv.style.display = "none"
        }
        //sql
        if ((localStorage.getItem("sqlkey")) == "true") {
            sqlskilldiv.style.display = "block"
        } else if ((localStorage.getItem("sqlkey")) == "false") {
            sqlskilldiv.style.display = "none"
        }
        //mongodb
        if ((localStorage.getItem("mongodbkey")) == "true") {
            mongodbskilldiv.style.display = "block"
        } else if ((localStorage.getItem("mongodbkey")) == "false") {
            mongodbskilldiv.style.display = "none"
        }
    }, 1000)
}


const submitDateObj = localStorage.getItem("submitdatekey")
const submitdate = localStorage.getItem("submitdaykey")

const currentTime = new Date();
const dateParts = submitDateObj.split("-");
const submitDateObjMonth = dateParts[1] - 1;
const submitDateObjYear = dateParts[0];
const submitDateObjDay = dateParts[2];
const submitDateObjj = new Date(submitDateObjYear, submitDateObjMonth, submitDateObjDay);


let timeDiff = currentTime.getUTCFullYear() - submitDateObjj.getUTCFullYear();
let currentdate = currentTime.getUTCDate()
let daydiff = submitdate - currentdate

const totalSeconds = timeDiff * (31536000);
const totalMinutes = totalSeconds / 60;
const totalHours = totalMinutes / 60;
const totalDays = totalHours / 24;








// Specify the target date in YYYY-MM-DD format
// const targetDate = "2023-02-3";

// Get the current date and target date as Date objects
// const currentDate = new Date();
// const dateParts = targetDate.split("-");
// const targetMonth = dateParts[1] - 1; // JavaScript months are zero-indexed
// const targetYear = dateParts[0];
// const targetDay = dateParts[2];
// const targetDateObj = new Date(targetYear, targetMonth, targetDay);

// Calculate the time difference in milliseconds
// const timeDiff =  currentDate.getTime()-targetDateObj.getTime() ;

// Calculate the number of days, hours, minutes, and seconds in the time difference
// const totalSeconds = Math.floor(timeDiff / 1000);
// const totalMinutes = Math.floor(totalSeconds / 60);
// const totalHours = Math.floor(totalMinutes / 60);
// const totalDays = Math.floor(totalHours / 24);

// // Output the result
// console.log(`The time period to ${targetDate} is ${totalSeconds} days.`);
