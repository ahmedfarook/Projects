

var subnet = "10.128.94.0/24"

//console.log((subnet.split("/")[0]).split("."))

console.log(subnet.split(".")[0] + "." + subnet.split(".")[1] + "." + subnet.split(".")[2] + ".")


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    tr;

array.forEach((v, i) => {
    var td = document.createElement('td');
    
    if (!(i % 5)) {
        tr = document.createElement('tr');
        document.getElementById('table0').appendChild(tr);
    }
    td.appendChild(document.createTextNode(v));
    tr.appendChild(td);
});