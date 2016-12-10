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

var gElPicTemp;
var gElContent;

function initGallery() {
    gElPicTemp = document.querySelector('#picTemplate');
    gElContent = document.querySelector('#categories');
    var pics = gPics;
    renderGallery(pics);
};

function renderGallery(pics) {
    pics.forEach(managePic);
}

function managePic(pic) {
    var clonedPicTemp = gElPicTemp.cloneNode(true);
    // clonedPicTemp.setAttribute('id', 'pic-' + pic.id);
    drawPic(clonedPicTemp, pic);
    clonedPicTemp.style = 'display:block';
    gElContent.appendChild(clonedPicTemp);
}

function drawPic(clonedPicTemp, pic) {
    clonedPicTemp.querySelector('div').setAttribute('onclick', 'enableEditor(' + pic.id + ')');
    clonedPicTemp.querySelector('img').setAttribute('src', pic.url);
    clonedPicTemp.querySelector('h1').textContent = pic.title;
    clonedPicTemp.querySelector('p').textContent = pic.desc;
}