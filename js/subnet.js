
//Creating a Function 

//Creating an array of an Object

//var subnet = "10.128.94.0/21"

var subnetData = {
    cidr: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    ipadd: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4]
} //console.log(subnetData.cidr.length)


document.getElementById("submit").addEventListener('click', function () {

   
    // Reading the input and saving in to a varibale
    var subnet = document.getElementById("SubnetID").value
    var subCount = document.getElementById("count").value
  
    //
    for (var i = 0; i < subnetData.cidr.length; i++) {
        //console.log(subnetData.cidr[i] == subnet.split("/")[1])
        if (subnetData.cidr[i] == subnet.split("/")[1]) {
            console.log(subnetData.ipadd[i])
            var subRange = subnetData.ipadd[i] / subCount
        }

    }




    


   


}) //end
