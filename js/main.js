'use strict';
console.log('Meme Generator');

function initApp() {
    initGallery();
}

function enableEditor(picId) {
    gEdtPic = picId;
    var galleryHook = document.querySelector('.gallery');
    galleryHook.style = 'display:none';
    var editorHook = document.querySelector('.meme-editor');
    editorHook.style = 'display:flex';
    initCanvas()
}
