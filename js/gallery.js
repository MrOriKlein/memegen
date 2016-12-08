'use strict';

var gPics = [
    {   
        id: 1,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/1.jpg',
        keywords: [],
    },
    {   
        id: 2,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/2.jpg',
        keywords: [],
    },
    {   
        id: 3,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/3.jpg',
        keywords: [],
    },
    {   
        id: 4,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/4.jpg',
        keywords: [],
    },
    {   
        id: 5,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/5.jpg',
        keywords: [],
    },
    {   
        id: 6,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/6.jpg',
        keywords: [],
    },
    {   
        id: 7,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/7.jpg',
        keywords: [],
    },
    {   
        id: 8,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/8.jpg',
        keywords: [],
    },
    {   
        id: 9,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/9.jpg',
        keywords: [],
    },
    {   
        id: 10,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/10.jpg',
        keywords: [],
    },
    {   
        id: 11,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/11.jpg',
        keywords: [],
    },
    {   
        id: 12,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/12.jpg',
        keywords: [],
    },
    {   
        id: 13,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/13.jpg',
        keywords: [],
    },
    {   
        id: 14,
        title: '',
        desc: '',
        url: '../assets/gfx/gallery/14.jpg',
        keywords: []
    }
]

var elPicTemp;
var elContent;

document.addEventListener("DOMContentLoaded", function(event) {
    elPicTemp = document.querySelector('#picTemplate');
    elContent = document.querySelector('.gallery');
    var pics = gPics;
    renderGallery(pics);
});

function renderGallery(pics) {
    pics.forEach(managePic);
}

function managePic(pic) {
    var clonedPicTemp = elPicTemp.cloneNode(true);
    // clonedPicTemp.setAttribute('id', 'pic-' + pic.id);
    drawPic(clonedPicTemp, pic);
    clonedPicTemp.style = 'display:block';
    elContent.appendChild(clonedPicTemp);
}

function drawPic(clonedPicTemp, pic) {
    var img = clonedPicTemp.querySelectorAll('img');
    clonedPicTemp.setAttribute('src', pic.url);
    clonedPicTemp.setAttribute('onclick', 'enableEditor(this)');
    clonedPicTemp.querySelectorAll('h1').textContent = pic.title;
    clonedPicTemp.querySelectorAll('p').textContent = pic.desc;
}