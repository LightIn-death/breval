mountained = false


function navMountain() {
    if (!mountained) {
        mountained = true
        navMountainShow()
    }
}

function navMountainHide() {
    mountained = false

    console.log("no")

}


function navMountainShow() {
    var cursorY = getCursorY()
    console.log("Hey :3  x :" + cursorX + "   y :" + cursorY)

}


function getCursorY(e) {
    return (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}