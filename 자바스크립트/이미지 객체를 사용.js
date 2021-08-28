imgOver = new image ();
imgOver.src = 'images//but2.gif';
imgOut = new image ();
imgOut.src = 'images//but1.gif';

function Over() {
    document.images[0].src = imgOver.src;
}

function Out() {
    document.images[0].src = imgOut.src;
}