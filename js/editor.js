'use strict';
// Canvas-based meme editor

// Declarations
var gElCanvas;
var gCtx;

//Fonts handler for the meme's' top & bottom text
var topTxt = {
                color: '',
                face: 'Comic Sans',
                size: 36,
                txt: '',
                align: 'center'
};

var btmTxt = {
                color: '',
                face: '',
                size: 36,
                txt: '',
                align: 'center'
};

var gFonts = { topTxt, btmTxt };

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
    gFonts.topTxt.color = '#FF0000';
    // gFonts.topTxt.face = 'Andale Mono';
    // gFontsDB.topTxt.size = 40;
    gFonts.topTxt.txt = 'One does not simply';
    gFonts.btmTxt.color = '#00FF00';
    gFonts.btmTxt.face = 'Arial';
    // gFontsDB.btmTxt.size = 45;
    gFonts.btmTxt.txt = 'depose the Illuminati';

    var txtType1 = gFonts.topTxt.size + 'px "' + gFonts.topTxt.face + '"';
    var txtType2 = gFonts.btmTxt.size + 'px "' + gFonts.btmTxt.face + '"';

    img.onload = function() {
        gCtx.drawImage(img, 0, 0, 500, 360);

        gCtx.font = txtType1;
        gCtx.txtAlign = gFonts.topTxt.align;
        gCtx.fillStyle = gFonts.topTxt.color;
        gCtx.fillText(gFonts.topTxt.txt, 50, 80);

        gCtx.font = txtType2;
        gCtx.txtAlign = gFonts.btmTxt.align;
        gCtx.fillStyle = gFonts.btmTxt.color;
        gCtx.fillText(gFonts.btmTxt.txt, 50, 300);
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
    gFonts[fontId].size += 2;
    drawOnCanvas();
}
function decTxtSize(fontId) {
    gFonts[fontId].size -= 2;
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