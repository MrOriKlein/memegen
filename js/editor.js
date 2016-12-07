'use strict';
// Canvas-based meme editor

// Declarations
var gElCanvas;
var gCtx;

//Fonts handler for the meme's' top & bottom text

var gCtxFont1 = {
    color: '',
    face: '',
    size: 36,
    txt: '',
};

var gCtxFont2 = {
    color: '',
    face: '',
    size: 36,
    txt: '',
};

var gFontsDB = {gCtxFont1, gCtxFont2};

// Functions

function initCanvas() {
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    drawOnCanvas();
}

/****************************************************************/
/* Demonstrates how to download a canvas as an image with a     */
/* single direct click on a link.                               */
/****************************************************************/
function drawOnCanvas() {
    var img = new Image();
    img.src = "../img/meme.png";

    // testing Font styling
    gFontsDB.gCtxFont1.color = '#FF0000';
    gFontsDB.gCtxFont1.face = 'Andale Mono';
    // gFontsDB.gCtxFont1.size = 40;
    gFontsDB.gCtxFont1.txt = 'One does not simply';
    gFontsDB.gCtxFont2.color = '#00FF00';
    gFontsDB.gCtxFont2.face = 'Arial';
    // gFontsDB.gCtxFont2.size = 45;
    gFontsDB.gCtxFont2.txt = 'depose the Illuminati';

    var txtType1 = gFontsDB.gCtxFont1.size + 'px "' + gFontsDB.gCtxFont1.face + '"';
    var txtType2 = gFontsDB.gCtxFont2.size + 'px "' + gFontsDB.gCtxFont2.face + '"';

    img.onload = function () {
        gCtx.drawImage(img, 0, 0, 500, 360);

        gCtx.font = txtType1;
        gCtx.fillStyle = gFontsDB.gCtxFont1.color;
        gCtx.fillText(gFontsDB.gCtxFont1.txt, 50, 80);


        gCtx.font = txtType2;
        gCtx.fillStyle = gFontsDB.gCtxFont2.color
        gCtx.fillText(gFontsDB.gCtxFont2.txt, 50, 300);
    };
}

/********************************************************************/
/* This is the function that will take care of image extraction and */
/* setting proper filename for the download.                        */
/* IMPORTANT: Call it from within a onclick event.                  */
/********************************************************************/
function downloadImg(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}

// Handling the editing toolbars

function incTxtSize(fontId) {
    gFontsDB[fontId].size += 2;
    drawOnCanvas()
}
function decTxtSize(fontId) {
    gFontsDB[fontId].size -= 2;
    drawOnCanvas()
}

  /******************/
 /* Drop down menu */
/******************/

//When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}