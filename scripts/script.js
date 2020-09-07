// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// stockPropName = "stock of company";
// company.stockPropName = 110;
// console.log("Name of the company: " + company.name);
// console.log("Name of the CEO: " + company.ceo.firstName);
// console.log("Stock of the company: " + company.stockPropName)

// //Better way
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook.ceo.firstName);

// function multiply(x,y){
//     return x * y;
// }

// console.log(multiply(3,5))

// //Function factory
// function makeMultiplier(multiplier){
//     var myFunc = function(x){
//         return multiplier * x;
//     };
//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// // console.log(multiplyBy3(10))
// // 
// //Passing function as arguments
// function doOperationOn(x, operation){
//     return operation(x);
// }

// var result = doOperationOn(3, multiplyBy3);
// console.log(result)


//Copying by value
// var a = 7;
// var b = a;
// console.log("a :" + a);
// console.log("b :"+ b);

// b= 5;
// console.log("After updating b")
// console.log("a :" + a);
// console.log("b :"+ b);


//Copying by reference
// var a = {x:7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("After update")
// console.log(a);
// console.log(b);

//Pass by reference vs value
// function changePrimitive(primValue){
//     console.log("In changePimitive");
//     console.log("Before");
//     console.log(primValue);

//     primValue = 5;
//     console.log("After");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("After changePrimitive, original Value:", + value);

// function Circle(radius){
//     this.radius = radius;
//     this.getArea =
//     function() {
//         return Math.PI * Math.pow(this.radius, 2)
//     }
// }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea()) 


//Array 
// var arr = new Array();
// arr[0] = "Arya";
// arr[1] = 2;
// arr[2] = function (name){
//     console.log("Hello, " + name);
// };
// arr[3] = {course : "HTML, CSS & JS"};
// console.log(arr);
// arr[2]("Arya Gowda");
// console.log(arr[3].course);

//Short hand

// var a = ["Arya", "Gowda", "Guddemane"];
// for (var i = 0; i< a.length; i++){
//     console.log("Hello, "+ a[i]);
// }

// var doubleAll = function (x){
//     return 2 * x;
// }

// console.log(doubleAll(3));

// function makeMultiplier(multiplier){
   
//     b();
//     return (
//         function(x) {
//             return x * multiplier;
//         }    
        
//     );
// }

// multiplier = 4
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(5));
// function b(){
//     console.log("Multiplier is "+multiplier);
// }

// (function() {
//     console.log("Hello Arya!");
// })();

// console.log(document.getElementById("title"));

///////////////////////////////
// document.addEventListener("DOMContentLoaded",
//     function (event){
//         function sayHello(event){
//             this.textContent ="I just said!"
//             var name = document.getElementById("name").value;
//             var message = "<h2>Hello "+ name + "!<h2>";
        
//             // document.getElementById("content").textContent = message;
//             document.getElementById("content").innerHTML = message;
        
//             if (name === "student"){
//                 var title = document.querySelector("#title").textContent;
//                 title += " & Lovin' it!";
//                 document.querySelector("#title").textContent = title;
//             }
//         }
        
//         //Unobstructive event binding
//         document.querySelector("button").addEventListener("click",sayHello);

//         document.querySelector("body").addEventListener("mousemove",
//             function (event){
               
//                 console.log("x :" + event.clientX);
//                 console.log("y :" + event.clientY);
//             }
//         )
//     }
// );

document.addEventListener("DOMContentLoaded",
function(event){
    //unobstructive event binding
    document.querySelector("button").addEventListener("click", function(){

        //Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json",
        function(res){
            var message = res.firstName + " "+ res.lastName
            if( res.likesChineseFood){
                message += " likes Chinese food";
            }
            else{
                message += " doesn't like Chinese food";
            }
            message += " and uses ";
            message += res.numberOfDisplays;
            message += " displays for coding";

            document.querySelector("#content").innerHTML = "<h2>"+message+
            "</h2>";
        });
    });
}
);
