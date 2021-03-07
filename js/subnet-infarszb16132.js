
//Creating a Function 

//Creating an array of an Object

//var subnet = "10.128.94.0/21"
var table = document.getElementById("myTable");
table.style.display = "none"
var subnetData = {
    cidr: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    ipadd: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4]
} //console.log(subnetData.cidr.length)

//document.write("Hello");

document.getElementById("submit").addEventListener('click', function () {


    // Reading the input and saving in to a varibale
    var subnet = document.getElementById("SubnetID").value
    console.log(typeof subnet)
    var subCount = document.getElementById("count").value

    //
    for (var i = 0; i < subnetData.cidr.length; i++) {
        //console.log(subnetData.cidr[i] == subnet.split("/")[1])
        if (subnetData.cidr[i] == subnet.split("/")[1]) {
            //console.log(subnetData.ipadd[i])
            var subRange = subnetData.ipadd[i] / subCount
        }


    }

    //Actual Game Starts here
    var button = []
    for (var i = 0; i < subnetData.cidr.length; i++) {
        
        if (subnetData.ipadd[i] == subRange) {

            var num = 0
            for (var c = 0; c < subCount; c++) {
                console.log(c)
                if (c == 0) {
                    button.push(subnet.split("/")[0] + "/" + subnetData.cidr[i])

                }
                else {

                    num += subRange
                    console.log(num)
                    console.log(button)
                    if(num === 256)
                    {
                        num = 0
                        sum = 1 + Number((subnet.split(".")[2]))
                        subnet = String((subnet.split(".")[0] + "." + subnet.split(".")[1] + "." + sum + "." + num + "/" + subnetData.cidr[i]))
                                                
                    }

                    else if(num === 512)

                    {
                        num = 0
                        sum = 2 + (subnet.split(".")[2])
                        subnet = String((subnet.split(".")[0] + "." + subnet.split(".")[1] + "." + sum + "." + num + "/" + subnetData.cidr[i]))
  
                    }
                    


                    button.push(subnet.split(".")[0] + "." + subnet.split(".")[1] + "." + subnet.split(".")[2] + "." + num + "/" + subnetData.cidr[i])
                    //console.log(button)
                    
                    


                }
                

            }




        }



    }

    // Display the data in html.
    //document.getElementById("output").textContent = button
   //console.log(button.length)
       
   var table = document.getElementById("myTable");
   table.style.display = "Block"
   // var row = table.insertRow(0);
     for (var i=0 ; i < button.length ; i++) {
        
        var row = table.insertRow(i)
        //table.style.border = "2px solid black";//
        cell1 = row.insertCell(0);
        cell1.innerHTML = button[i];
        
        
    }

    

      


}) //end

