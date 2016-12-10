'use strict';
console.log('Meme Generator');

// Declarations
var gElPicTemp;
var gElContent;

// Functions

// On DOM ready
function initApp() {
    initGallery();
    initEditor();
}

// Injects the gallery elements onto the DOM
function initGallery() {
    gElPicTemp = document.querySelector('#picTemplate');
    gElContent = document.querySelector('#categories');
    renderGallery();
}

// Injects editor's DOM elements for future call 
function initEditor() {
    
}

function enableEditor(picId) {
    gEdtPic = picId;
    var galleryHook = document.querySelector('.gallery');
    galleryHook.style = 'display:none';
    var editorHook = document.querySelector('.meme-editor');
    editorHook.style = 'display:flex';
    initCanvas();
}
