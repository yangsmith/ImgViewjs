/**
 * Created by saya on 2016/6/20.
 */
function showPic(whichpic) {
    var src = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",src);

    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);

}

window.onload = prepareLinks;
function prepareLinks(){
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