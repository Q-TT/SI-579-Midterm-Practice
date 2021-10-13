const flashingBlock = document.querySelector('#problem-4 #color-target');

flashingBlock.classList.add('blue');
setInterval(() => {
    if(flashingBlock.classList.contains('yellow')) {
        flashingBlock.classList.remove('yellow');
        flashingBlock.classList.add('blue');
    } else {
        flashingBlock.classList.remove('blue');
        flashingBlock.classList.add('yellow');
    }
}, 2000);