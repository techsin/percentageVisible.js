# percentageVisible.js
Small script that returns what percentage an element is visible (in viewport);

##Demo: http://codepen.io/techsin/pen/wKZejP
##Usage: 
    var el = $('.box');
    var data = percentInViewport(el);
    data.horizontal; //values between 0.00 - 1.00  representing percentage of element is horizontally in same area as viewport.
    data.vertical; //values between 0.00 - 1.00  representing percentage of element is vertically in same area as viewport.
