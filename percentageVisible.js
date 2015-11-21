function percentInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
    var wh = window.innerHeight || document.documentElement.clientHeight;
    var ww = window.innerWidth || document.documentElement.clientWidth;
    var rect = el.getBoundingClientRect();
    var totalHeight = rect.bottom-rect.top;
    var totalWidth = rect.right-rect.left;
    return {
      vertical: +(( (Math.min(wh,Math.max(0,rect.bottom)) - Math.max(0,Math.min(wh,rect.top))) / totalHeight ).toFixed(2)),
      horizontal: +(( (Math.min(ww,Math.max(0,rect.right)) - Math.max(0,Math.min(ww,rect.left))) / totalWidth ).toFixed(2)),
    };
}
