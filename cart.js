function addTable() {
    var total_price = 0;
    var arr = JSON.parse(localStorage.getItem("products"));
    var table = document.createElement('table');
    table.className = "table"; //automat va incarca stilurile pentru table din bootstrap
    table.innerHTML = "<tr><th> Product Name </th><th> Price ($) </th></tr>";

    for (var x = 0; x < arr.length; x++) {
        table.innerHTML += "<tr><td>" + arr[x].name + "</td><td>" + parseInt(arr[x].price) + "</td></tr>";
        document.getElementById("addtable").appendChild(table);
        total_price += parseInt(arr[x].price);
    }
    document.getElementById("price").innerHTML = total_price + " $";
}