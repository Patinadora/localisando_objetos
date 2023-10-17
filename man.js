

  objects = [];
   status = "";
   
    function preload(){

     }
     function setup() { 
        canvas = createCanvas(640, 420);
         canvas.center(); 
         video=createCapture(VIDEO);
         video.size(640,420);
video.hide();}
         function modelLoaded() {
             console.log("Modelo Carregado!") ;
             status = true; 
         
             }
             function iniciar(){
            
         objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
         document.getElementById("status").innerHTML = "Status: Detectando Objetos";
         nome=document.getElementById("objeto").value;

             }

             function gotResult(error, results) { 
                if (error) {
                     console.log(error);
                     } console.log(results);
                      objects = results; 
            }
     function draw() {
      image(video, 0, 0, 640, 420);
          if (status != " ") { 
        objectDetector.detect(video, gotResult);
         for (var i = 0; i < objects.length; i++ ) { 
                document.getElementById("status").innerHTML = "Status: Objetos Detectados"; 

                fill("#FF0000");
                 percent = floor(objects[i].confidence * 100);
                  text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
                   noFill(); 
                   stroke(255, 0, 0);
                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                    if(objects[i].label== nome){
                     document.getElementById("status").innerHTML = "objeto encontrado"; 
                    }
                    else{
                     document.getElementById("status").innerHTML = "objeto não emcontrado";
                    }
     }
     }
     }
