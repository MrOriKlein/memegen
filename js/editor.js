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
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
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
        gCtx.drawImage(img, 0, 0, 500, 360);

        gCtx.font = txtType1;
        gCtx.fillStyle = gFonts.topTxt.color;
        gCtx.textAlign = gFonts.topTxt.align;
        gCtx.fillText(gFonts.topTxt.txt, 250, 80);

        gCtx.font = txtType2;
        gCtx.textAlign = gFonts.btmTxt.align;
        gCtx.fillStyle = gFonts.btmTxt.color;
        gCtx.fillText(gFonts.btmTxt.txt, 250, 300);
    };
}

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
function myFunction() {
    document.querySelector('#myDropdown').classList.toggle('show');
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