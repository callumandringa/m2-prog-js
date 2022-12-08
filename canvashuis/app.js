class App
{

    runApplication()
    {   let title = document.getElementById("ifelse")
        let randomGetal = Math.random();
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        g.beginPath()
        g.fillStyle = "Orange";
        g.moveTo(300,100)
        g.lineTo(200,300)
        g.lineTo(600,400)
        g.lineTo(700,200)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(200,300)
        g.lineTo(200,500)
        g.lineTo(600,600)
        g.lineTo(600,400)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(600,400)
        g.lineTo(700,200)
        g.lineTo(800,300)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800,500)
        g.lineTo(800,300)
        g.closePath();
        g.stroke();
        g.fill();
       
        g.beginPath()
        g.moveTo(300,100)
        g.lineTo(300,40)
        g.lineTo(250,40)
        g.lineTo(350,40)
        g.lineTo(300,40)
        g.lineTo(250,25)
        g.lineTo(300,40)
        g.lineTo(300,0)
        g.lineTo(300,40)
        g.lineTo(250,10)
        g.lineTo(300,40)
        g.lineTo(350,25)
        g.lineTo(300,40)
        g.lineTo(350,10)
        g.lineTo(300,40)
        g.lineTo(275,5)
        g.lineTo(300,40)
        g.lineTo(325,5)
        g.stroke()

        g.beginPath()
        g.moveTo(600,400)
        g.lineTo(800,500)
        g.lineTo()
        g.stroke();


        console.log(canvas);

        if (randomGetal == 0 )
        {
            g.fillStyle == "red";
        }
        if (randomGetal > 0.2)
        {console.log}
        if (randomGetal < 0.6)
        {console.log}
        
        
        
    }
}

let app = new App();
app.runApplication();