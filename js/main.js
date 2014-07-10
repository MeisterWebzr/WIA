/*
     Name: Otto "Meister" Burroughs
     Date: 7-08-2014
     Class & Section:  WIA-333-0
     Comments: "HTML5 Canvas Drawing"
 */
window.onload = function(){


			if (Modernizr.canvas) {
			    
			    
			    console.log("This browser supports HTML5 canvas! Click objects below for full details.");
			    console.log(Modernizr);
			    //alert(" Your broswer supports canvas, check the console log for class details.")


			  } else {
			    
			    alert("Canvas NOT Supported:( ");
			  }

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file

// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*********************************************/
		
/*var theCanvas = document.getElementById("Canvas");

		if (Modernizr.canvas) { //setting up the call to canvas verifying with modernizr getting 2d context
			
			//Canvas is supported
			var theCanvas = document.getElementById("Canvas");
			var ctx = theCanvas.getContext("2d");

			//draw here

		}else{
			
			//canvas is not supported enter polyfills
			ctx.font = "19pt Helvetica Neue";
			ctx.fillText("Canvas is Not Supported", 20 , 40);

		}*/

/*******************************************

PART 1



Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

 

		 //setting up the call to canvas verifying with modernizr getting 2d context


		//Canvas is supported

			var theCanvas1 = document.getElementById("Canvas1");  
						
						if (theCanvas1) {
							//get context
							var ctx1 = theCanvas1.getContext("2d");
							if (ctx1) {
								
								//Draw here	
								//Draw filled and storked rectangle
								ctx1.strokeStyle = "#000";
								ctx1.fillStyle = "#3399FF";
								ctx1.lineWidth = 2;
								
								//draw the rectangle
								ctx1.strokeRect(0, 0, 50, 100 );
								ctx1.fillRect(0, 0, 50, 100);

						

							}//end of if ctx

						}//end of of theCanvas
						//Canvas 1 End


				
		//}else{
			
			
			//canvas is not supported enter polyfills
			//ctx2.font = "19pt Helvetica Neue";
			//ctx2.fillText("Canvas is Not Supported", 20 , 40);

		//}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var theCanvas2 = document.getElementById('Canvas2');
								
				if (theCanvas2.getContext) {

					var ctx2 = theCanvas2.getContext("2d");
									
					//first circle with radius of 60
					//formula to calculate degree in numerical values
			

						if (ctx2) {


								ctx2.strokeStyle = "rgb(0,0,0)";
								ctx2.fillStyle ='rgba(255,0,0,.5)';
							    ctx2.beginPath();
							    ctx2.arc(50, 50, 20, 0, (360/180)*Math.PI, true);
							    ctx2.fill();
								ctx2.stroke();



						}
				}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

var theCanvas3 = document.getElementById('Canvas3');
								
								if (theCanvas3.getContext) {

									var ctx3 = theCanvas3.getContext("2d");

									if (ctx3) {

 									          //Draw Star here
 									          ctx3.strokeStyle = "black";
 									          ctx3.lineWidth = 3;
 									          ctx3.fillStyle = "red";

 									          ctx3.beginPath();
 									          ctx3.moveTo(100, 100);
 									          //ctx3.lineTo(125, 0);
 									          //ctx3.lineTo(150, 100);
 									          ctx3.lineTo(250, 100);
 									          ctx3.lineTo(0, 100);
 									          ctx3.lineTo(210, 250);
 									          ctx3.lineTo(125, 0);
 									          ctx3.lineTo(40, 250);
 									          ctx3.lineTo(250, 100);

 									          ctx3.stroke();
 									          ctx3.fill();

 									}
 								}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

var theCanvas4 = document.getElementById('Canvas4');
								
								if (theCanvas4.getContext) {

									var ctx4 = theCanvas4.getContext("2d");

									if (ctx4) {
	

										//Draw Umbrella top here
										ctx4.lineWidth = 3;
										//ctx4.fillStyle ="rgb(0,0,0)";
										ctx4.beginPath();
										ctx4.arc( 130, 120, 99, 0, 1*Math.PI, true);
										ctx4.stroke();
										//ctx4.fill();


										//beziercurveTo (cx1, cy1, cx2, cy2, start1, end2)
										ctx4.bezierCurveTo( 115, 99, 109, 99, 231, 120);
										ctx4.stroke();


										//umbrella stick
										ctx4.beginPath();
										ctx4.moveTo(125, 103);
										ctx4.lineTo(122, 210);
										ctx4.stroke();

										//umbrella handle
										ctx4.fillStyle = "red";
										ctx4.fillRect(118, 210, 9, 16);

									}
								}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/
var theCanvas5 = document.getElementById('Canvas5');
								
								if (theCanvas5.getContext) {

									var ctx5 = theCanvas5.getContext("2d");
									
									if (ctx5) {

										var theString = "===> @MeisterWebzr <===";
										//Draw text here
										//style the font
										ctx5.font = "49pt Helvetica Neue";
										ctx5.fillStyle = "red";
										ctx5.fillText(theString, 0, 140);
									}
								}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/
var theCanvas6 = document.getElementById('Canvas6');
								
								if (theCanvas6.getContext) {

									var ctx6 = theCanvas6.getContext("2d");
									
										if (ctx6) {
											
											//Draw images here
											var srcImg = document.getElementById("img1");

											//draw image onto canvas actual size
										    //ctx6.drawImage(srcImg, 0,0);


										    //draw image at 50%
										    //ctx6.drawImage(srcImg, 0,0, 1650, 544);

										    //sliced section of th logo
										    ctx6.drawImage(srcImg, 1955, 150, 1090, 499, -2, 38, 800, 230);


										}

								}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. Create a complex scene.
You must use at least 3 different methods.

********************************************/

var theCanvas7 = document.getElementById('Canvas7');
								
								if (theCanvas7.getContext) {

									var ctx7 = theCanvas7.getContext("2d");
									
									if (ctx7) {

										// Method 1
										// Draw text onto canvas
										var theString = "Meister  Web Designer & Developer";								
										ctx7.font = "19pt Helvetica Neue";
										ctx7.fillStyle = "black";
										ctx7.fillText(theString, 45, 130);

										//Method 2 
										//Draw image onto canvas actual size
										var srcImg = document.getElementById("img2");
										ctx7.drawImage(srcImg, 400, -90);

										//Method 3
										//Draw a rectangle
										ctx7.strokeStyle = "#F00";
										ctx7.fillStyle = "#F00";
										ctx7.lineWidth = 1;
										//ctx7.strokeRect(0, 0, 50, 100 );
										ctx7.fillRect(134, 90, 2, 60);



									}
								}


}//END for window.onload function

