let hello = [
    {
        id:1,
        name:"Sea Breeze",
        image:"b-1.jpg",
        price:"1000",
        rating:5,
    },
    {
        id:2,
        name:"The Cottage",
        image:"b-11.jpg",
        price:"1000",
        rating:5,
    },
    {
        id:3,
        name:"Blue Bay",
        image:"b-12.jpg",
        price:"1000",
        rating:5,
    },
    {
        id:4,
        name:"The Oasis",
        image:"fp-10.jpg",
        price:"1000",
        rating:5,
    },
    {
        id:5,
        name:"Dreamscape",
        image:"fp-11.jpg",
        price:"1000",
        rating:5,
    },
    {
        id:6,
        name:"The Palace",
        image:"fp-12.jpg",
        price:"5000",
        rating:5,
    },
 ];

const body= document.querySelector("body"),
products = document.querySelector(".products"),
shopping = document.querySelector(".shopping");
closeCart = document.querySelector(".close"),
productlist = document.querySelector(".productlist");
quantity = document.querySelector(".quantity");
total=document.querySelector(".totalprice")

  let checkOutList =[];

  shopping.onclick = () =>{
 body.classList.add("active");
  };
  closeCart.onclick = () =>{
   body.classList.remove("active");
    };

function hey (){
    hello.forEach((item,key) => {
     
      let div =document.createElement("div");
      div.classList.add("item");

//   let star ="";
// for ( i = 0; i < item.rating; i++){
//     star += `<i class="fa fa-star" style="color:brown"></i>`;
// }
    


//       div.innerHTML = `
//       <img src ="Image/${item.image}"/>
//  <div class ="name">${item.name}</div>
//  <div> ${star}</div>
//  <div class="price"> <small> ${item.price}</small></div>
//  <button onclick ="addToCart(${key})" style="background-color:black; color:white;  border-radius: 20px; height:20px; width:100px ;"><i class="fa fa-cart-plus"></i> Add To cart </button>

//       `;

div.innerHTML = `
<div class="container" style="padding:20px"  height:500px; width:500px;>
    <div class="d-flex  border border-1">

        <div class="hello border position-relative">
          <img id="imageclick" src="${item.image}" style="height: 300px; width: 350px;">
          <button class="position-absolute btn btn-" style="left: 30px; top:30px; background-color: rgb(124, 50, 120); color:white;">button</button>
          <button class="position-absolute btn btn-secondary" style="right: 30px; top:30px;">button</button>

          <div class="d-flex position-absolute gap-2" style="right: 30px; bottom:30px;">
            <div><i class="fa-solid fa-link translate-middle-x btn btn-secondary"></i></div>
            <div><i class="fa-brands fa-square-youtube translate-middle-x btn btn-secondary"></i></div>
            <div><i class="fa-regular fa-image translate-middle-x btn btn-secondary"></i></div>
          </div>
          <!-- button -->
        </div>

        <div class="p-4">
          <h5 class ="name">${item.name} </h5>
          <p><i class="fa-solid fa-location-dot p-1"></i>Est St,77-Central Park South,NYC</p><br>
          <div class="d-flex justify-content-between">
            <p><i class="fa-solid fa-bed p-1"></i>6 Bedrooms</p>
            <p><i class="fa-solid fa-bath p-1"></i>3 Bathrooms</p>
          </div>
          <div class="d-flex justify-content-between">
            <p><i class="fa-solid fa-square-rss p-1"></i>6 Bedrooms</p>
            <p><i class="fa-solid fa-car p-1"></i>3 Bathrooms</p>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <h5 <small>$ ${item.price}</small></h3>
            </div>
            <div style="display:flex;">
            <p  style="color: black;"><i class="fa-solid fa-arrow-right p-1"></i> <i
                  class="fa-solid fa-share p-1"></i>
                  </p> </div>
<h3 id="demo" onclick="myFunction()"><p class="" onclick ="addToCart(${key})" ><i class="fa-regular fa-heart p-1" style="color:rgb(124, 50, 120)"></i></p></h3>




          </div>

        </div>
      </div>
      `;

    

     

      products.appendChild(div);


      div.querySelector('#imageclick').onclick = () => {
        // Redirect to details page
        window.location.href = `newpage.html?id=${item.id}`;
      };



        
    });
    
}
hey();
function addToCart(id){
if(checkOutList[id]  ==  null){
    checkOutList[id] = hello[id];
   checkOutList[id].quantity = 1;
}else{
    checkOutList[id].quantity +=1;
}
reloadCart();
}




// function reloadCart(){
//     productlist.innerHTML= "";
//     checkOutList.forEach((item,key) =>{
//         let li=document.createElement("li");
//         li.innerHTML=`
//         <imag> src ="image/${item.image}">
//         <div>${item.name}</div>
//          <div>${item.price}</div>`;

//          productlist.appendChild(li);
//     })
// }




function reloadCart(){
    productlist.innerHTML = "";
    let count = 0;
    let totalprice = 0;
    
    
    
checkOutList.forEach((item, key) => {
    totalprice += parseInt(item.price * item.quantity)
    count += item.quantity;
 let li = document.createElement("li");
 li.innerHTML=`
 <img src="${item.image}">  
 
 <div>${item.name}</div>
 <div>${item.price}</div>
<div>


    </div>`;
//     <button onclick="changeQuantity(${key},${item.quantity - 1})">-</button>
//  <div class="conut">${item.quantity}</div>
// <button onclick="changeQuantity(${key},${item.quantity + 1})">+</button>

        productlist.appendChild(li);
    });
   total.innerHTML = `<small>Subtotal (${count} items) tk </small>` + totalprice;
    quantity.innerHTML = count;
}
function changeQuantity(key,quantity){
    if(quantity == 0 ){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity = quantity;
    }
    reloadCart();
}




// const user = localStorage.getItem("user");

// if (user) {
//   const parsedUser = JSON.parse(user);
//   document.getElementById(
//     "welcomeMessage"
//   ).innerHTML = `Hello ${parsedUser.name}`;
//   document.getElementById("logoutButton").classList.remove("hidden");
// } else {
//   document.getElementById(
//     "welcomeMessage"
//   ).innerHTML = `Hello, please <a href='login.html'>login</a>.`;
// }
//       document
//         .getElementById("logoutButton")
//         .addEventListener("click", function () {
//           localStorage.removeItem("user");
//           window.location.href = "index1.html";
//         });
const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        document.getElementById
    
        .innerHTML = `Hello ${parsedUser.name}`;
        document.getElementById("logoutButton").classList.remove("hidden");
      } 

      document
        .getElementById("logoutButton")
        .addEventListener("click", function () {
          localStorage.removeItem("user");
          window.location.href = "index1.html";
        });

// type
      
var jodu= new Typed(".auto-type",{
  strings :["Dream Plaza"],
  typedSpeed: 150,
  backSpeed: 150,
  loop: true
});







        