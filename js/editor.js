'use strict';
// Canvas-based meme editor

// Declarations
var gElCanvas;
var gCtx;
var gEdtPic;

//Fonts handler for the meme's' top & bottom text
var topTxt = {
                color: '#000000',
                face: 'Arial',
                size: 36,
                txt: 'Top Header',
                align: 'center'
};

var btmTxt = {
                color: '#000000',
                face: 'Arial',
                size: 36,
                txt: 'Bottom Footer',
                align: 'center'
};

var gFonts = { topTxt, btmTxt };

// Functions

function initCanvas() {
    gElCanvas = document.querySelector('#myCanvas');
    gCtx = gElCanvas.getContext('2d');
    gElCanvas.style.width = '100%';
    gElCanvas.style.height = '100%';
    gElCanvas.width = gElCanvas.offsetWidth;
    gElCanvas.height = gElCanvas.offsetHeight;
    drawOnCanvas();
}


function drawOnCanvas() {
    var img = new Image();
    img.src = gPics[gEdtPic - 1].url;

    // testing Font styling
    gFonts.topTxt.color = '#FF0000';
    // gFonts.topTxt.face = 'Andale Mono';
    // gFontsDB.topTxt.size = 40;
    // gFonts.topTxt.txt = 'One does not simply';
    gFonts.btmTxt.color = '#00FF00';
    // gFonts.btmTxt.face = 'Arial';
    // gFontsDB.btmTxt.size = 45;
    // gFonts.btmTxt.txt = 'depose the Illuminati';

    var txtType1 = gFonts.topTxt.size + 'px "' + gFonts.topTxt.face + '"';
    var txtType2 = gFonts.btmTxt.size + 'px "' + gFonts.btmTxt.face + '"';

    img.onload = function() {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        gCtx.font = txtType1;
        gCtx.fillStyle = gFonts.topTxt.color;
        gCtx.textAlign = gFonts.topTxt.align;
        gCtx.fillText(gFonts.topTxt.txt, gElCanvas.width/2, 80);

        gCtx.font = txtType2;
        gCtx.textAlign = gFonts.btmTxt.align;
        gCtx.fillStyle = gFonts.btmTxt.color;
        gCtx.fillText(gFonts.btmTxt.txt, gElCanvas.width/2, 300);
    };
}

//***************************************//
//** Text warp adaptation in progress **//
//*************************************// 

// function todo(ctx, text, fontColor) {
//     var max_width  = gElCanvas.width;
//     var fontSizeTop =  gFonts.topTxt.size;
//     var fontSizeBtm =  gFonts.topBtm.size;
//     var lines =  new Array();
//     var width = 0, i, j;
//     var result;
//     var color = fontColor || "white";

//     // Font and size is required for ctx.measureText()
//     gCtx.font   = txtType1;

    
//     // Start calculation
//     while ( text.length ) {
//     	for( i=text.length; ctx.measureText(text.substr(0,i)).width > max_width; i-- );
    
//     	result = text.substr(0,i);
    
//     	if ( i !== text.length )
//     		for( j=0; result.indexOf(" ",j) !== -1; j=result.indexOf(" ",j)+1 );
    	
//     	lines.push( result.substr(0, j|| result.length) );
//     	width = Math.max( width, ctx.measureText(lines[ lines.length-1 ]).width );
//     	text  = text.substr( lines[ lines.length-1 ].length, text.length );
//     }
    
    
//     // Calculate canvas size, add margin
//     gCtx.canvas.width  = 14 + width;
//     gCtx.canvas.height =  8 + ( fontSize + 5 ) * lines.length;

//     // Render
//     ctx.fillStyle = color;
//     for ( i=0, j=lines.length; i<j; ++i ) {
//     	ctx.fillText( lines[i], 8, 5 + fontSize + (fontSize+5) * i );
//     }
// }

/********************************************************************/
/* This is the function that will take care of image extraction and */
/* setting proper filename for the download.                        */
/* IMPORTANT: Call it from within an onclick event.                  */
/********************************************************************/
function downloadImg(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}

// Handling the editing toolbars

function modTxtSize(arg, fontId) {
    gFonts[fontId].size += arg;
    drawOnCanvas();
}

function setTxtType(htmlEl, fontId) {
    var typeFace = htmlEl.innerText;
    gFonts[fontId].face = typeFace;
    drawOnCanvas();
}

function setTxtAlign(alignment, fontId) {
    gFonts[fontId].align = '' + alignment;
    drawOnCanvas();
}

// Input text area handler

var inputBoxTop = document.querySelector('.txtInputTop');
inputBoxTop.onkeyup = function(){
    gFonts.topTxt.txt = inputBoxTop.value;
    drawOnCanvas();
}
var inputBoxBtm = document.querySelector('.txtInputBtm');
inputBoxBtm.onkeyup = function(){
    gFonts.btmTxt.txt = inputBoxBtm.value;
    drawOnCanvas();
}


/******************/
/* Drop down menu */
/******************/

//When the user clicks on the button, toggle between hiding and showing the dropdown content
function dropMenu(menuId) {
    document.querySelector('#myDropdown' + menuId).classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}