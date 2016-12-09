'use strict';
console.log('Meme Generator');

function initApp() {
    initGallery();
}

function enableEditor(elHtml) {
    var galleryHook = document.querySelector('.gallery');
    galleryHook.style = 'display:none';
    var editorHook = document.querySelector('.meme-editor');
    editorHook.style = 'display:flex';
    var elPic = elHtml.getAttribute('src');
    initCanvas(elPic)
}