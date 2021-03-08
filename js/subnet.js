
//Creating a Function 
function timeout() {
    setTimeout(function(){ document.getElementById("error").textContent = ""; }, 5000);
  }
//Creating an array of an Object

//var subnet = "10.128.94.0/21"
var table = document.getElementById("myTable");
table.style.display = "none"
var count = ["2","4","8","16","32","64","128"]
var subnetData = {
    cidr: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    ipadd: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4]
} //console.log(subnetData.cidr.length)

//document.write("Hello");
//document.getElementById("SubnetID").value
document.getElementById("submit").addEventListener('click', function () {

    // Reading the input and saving in to a varibale
    var subnet = document.getElementById("SubnetID").value
    console.log(typeof subnet)
    var subCount = (document.getElementById("count").value)
    console.log(count.includes(subCount))
    if (count.includes(subCount)) {

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
    
     for (var i=0 ; i <= button.length ; i++) {
        
        // if is created to create headers.
        if(i == 0 ){
            var row = table.insertRow(0);
            row.style.border = "2px solid blue"
            cell1 = row.insertCell(0);
            cell1.style.border = "2px solid blue"
            cell1.innerHTML = "<b>Subnet ID(cidr)</b>";
            cell2 = row.insertCell(1);
            cell2.style.border = "2px solid blue"
            cell2.innerHTML = " &nbsp;<b>IP Address Count</b>"
        }
        //for adding rows and colums and data
        else{

            var row = table.insertRow(i)
            row.style.border = "2px solid blue"
            var v = i - 1 
            //table.style.border = "2px solid black";//
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1)
            cell1.innerHTML = button[v];
            cell2.innerHTML =  "&nbsp;" + subRange;
            cell1.style.border = "2px solid blue"
            cell2.style.border = "2px solid blue"
        }
        

        
    }
}
    

    else {
        document.getElementById("error").textContent ="error : please enter the input value in proper format"
        timeout()
    }
    
    //document.getElementById("submit").disabled = true;


      


}) //end

