/**
 * Created by saya on 2016/6/20.
 */
function showPic(whichpic) {
    if (!document.getElementById("placeholder"))  return false;
    var src = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",src);


    var description = document.getElementById("description");
    if (description){
        var text = whichpic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }

    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);

}

window.onload = prepareLinks;
function prepareLinks(){
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        if (links[i].getAttribute("class") == "popup"){
             links[i].onclick = function(){
                 popUp(this.getAttribute("href"));
                 return false;
             }
        }
    }

    function popUp(winURL) {
        window.open(winURL,"popup","width=320,height=480");
    }
}

function prepareGallery(){
    if (!document.getElementsByName || !document.getElementById){
        return false;
    }

    var gallery = document.getElementById("imagegallery");
    if(!gallery){
        return false;
    }

    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function() {
            return !showPic(this);
        }
    }

}

function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery)