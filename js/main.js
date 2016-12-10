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

    injMenuOptions('1', 'topTxt');
    injMenuOptions('2', 'btmTxt');
    injEdtBtns('1', 'topTxt');
    injEdtBtns('2', 'btmTxt');
}

function injMenuOptions(menuId, pos) {
    var elMenuItems = document.querySelector('#myDropdown' + menuId);
    var fonts = ['Arial', 'Courier', 'Times New Roman', 'Helvatica<'];
    for (var i = 0; i < fonts.length; ++i) {
        var str = '<p onclick="setTxtType(this, \'' + pos + '\')">' + fonts[i] + '</p>';
        elMenuItems.innerHTML += str;
    }
}

function injEdtBtns(id, pos) {
    var domHook = document.querySelector('#dpdwn'+id);
    domHook.innerHTML += '<img src="assets/gfx/toolbar/txt-color.png"    class="edtbtn" />'
    domHook.innerHTML += '<img src="assets/gfx/toolbar/size-up.png"      class="edtbtn" onclick="modTxtSize(1,           \'' + pos + '\')" />'
    domHook.innerHTML += '<img src="assets/gfx/toolbar/size-down.png"    class="edtbtn" onclick="modTxtSize(-1,          \'' + pos + '\')" />'
    domHook.innerHTML += '<img src="assets/gfx/toolbar/align-left.png"   class="edtbtn" onclick="setTxtAlign(\'end\',    \'' + pos + '\')" />'
    domHook.innerHTML += '<img src="assets/gfx/toolbar/align-center.png" class="edtbtn" onclick="setTxtAlign(\'center\', \'' + pos + '\')" />'
    domHook.innerHTML += '<img src="assets/gfx/toolbar/align-right.png"  class="edtbtn" onclick="setTxtAlign(\'start\',  \'' + pos + '\')" />'
}

function enableEditor(picId) {
    gEdtPic = picId;
    var galleryHook = document.querySelector('.gallery');
    galleryHook.style = 'display:none';
    var editorHook = document.querySelector('.meme-editor');
    editorHook.style = 'display:flex';
    initCanvas();
}
