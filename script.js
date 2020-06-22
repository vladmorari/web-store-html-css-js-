var img = document.createElement("img");
img.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4646c711677199.572bdaa658fc3.png";

var src = document.getElementById("header-bg");
src.appendChild(img);

var x = 0;

function addToBox() {

    document.getElementById("cart-number").innerHTML = x;
    x++;
}