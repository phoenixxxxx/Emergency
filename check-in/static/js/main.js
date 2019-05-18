window.onload = function () {
    var img = new Image();
    img.src = 'image/UCSD.png';

    img.onload = function () {
        // CREATE CANVAS CONTEXT.
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);  // DRAW THE IMAGE TO THE CANVAS.

        window.setTimeout(draw(data1), 5000 );
        window.setTimeout(draw(data2), 3000 );
        window.setTimeout(draw(data3), 2000 );
        window.setTimeout(draw(data4), 4000 );
        canvas.addEventListener('mousedown', function(e){
            var mx = event.clientX;
            var my = event.clientY;
            var l = positions.length;
            for (var i = l-1; i >= 0; i--){
                if (Math.abs(positions[i].X - mx) +Math.abs(positions[i].Y - my) < 20 ){
                    alert("UserId: " + positions[i].Id + "\n" + 
                    "Position: (" + positions[i].X + ", " + positions[i].Y + 
                    ")\n" + "Time: " + positions[i].T );
                }
            }
        }, true);
     }
}

// Pretend that we have a database that feed data to here
var data1 = {
    T : new Date(2019, 5, 17, 7, 30, 19, 0),
    X : 520 ,
    Y : 240 ,
    R : 5 ,
    Id : "John"
}

var data2 = {
    T : new Date(2019, 5, 17, 7, 23, 57, 0),
    X : 340 ,
    Y : 400 ,
    R : 8 ,
    Id : "Mike"
}

var data3 = {
    T : new Date(2019, 5, 17, 6, 46, 2, 0),
    X : 620 ,
    Y : 500 ,
    R : 2 ,
    Id : "Jack"
}

var data4 = {
    T : new Date(2019, 5, 17, 8, 10, 33, 0),
    X : 440 ,
    Y : 700 ,
    R : 12 ,
    Id : "Zac"
}

var positions = [];



function draw(data) {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    var posx = data.X;
    var posy = data.Y;

    if (data.R > 10){
        ctx.fillStyle = "red";
    }else if (data.R <= 10 && data.R > 5){
        ctx.fillStyle = "#ff8c00";
    }else{
        ctx.fillStyle = "#E5B37F";
    }
    ctx.beginPath();
    ctx.arc(posx, posy, 8, 0, 2 * Math.PI);
    ctx.fill();
    positions.push(data);
}