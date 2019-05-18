window.setTimeout(function(){}, 5000);
var returnValue = 1;
var error = true;
var xhr = new XMLHttpRequest();
xhr.open("GET", "'https://us-south.functions.cloud.ibm.com/api/v1/web/z5liu%40ucsd.edu_dev/default/GetDataFromLog.json'", true);

xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Yes we did it!:" + xhr.responseText);
            error = false;
        } else {
            console.error("No, error:"+xhr.statusText);
        }
    }   
};
xhr.onerror = function (e) {
    console.error("No, error:"+xhr.statusText);
};

xhr.send(null);

var x = 120;
var y = 240;
var request = new XMLHttpRequest();

// request.open("POST", "https://check-in-insightful-manatee.mybluemix.net/", true);
// https://us-south.functions.cloud.ibm.com/api/v1/web/z5liu%40ucsd.edu_dev/default/GetDataFromLog.json
request.open("POST", "https://us-south.functions.cloud.ibm.com/api/v1/web/z5liu%40ucsd.edu_dev/default/GetDataFromLog.json", true);
request.send({X:x , Y:y , Condition:returnValue});