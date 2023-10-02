const shopping = document.querySelector(".shopping");
let body = document.querySelector("body");
const close =document.querySelector(".close");
let nvlsdom = document.querySelector(".nvlsdom");
let num=document.querySelector(".num");
let urcard = document.querySelector('.urcard');
let totalprice = document.querySelector('.totalprice');
shopping.addEventListener('click',()=>{
    body.classList.add('active');
});
close.addEventListener('click',()=>{
    body.classList.remove('active');
});
//dom
let nvls =[{
    id:1,
    name:"harry potter and the philosopher's stone",
    img: "Stone.jpg",
    price:51.00,
    quantity:1,
},
{
    id:2,
    name:"harry potter and the chamber of secrets",
    img: "chamber.jpg",
    price:58.07,
    quantity:1,
},
{
    id:3,
    name:"harry potter and the prisoner of azkaban",
    img: "prisoner.jpg",
    price:37.06,
    quantity:1,
},
{
    id:4,
    name:"harry potter and the goblet of fire",
    img: "goblet.jpg",
    price:43.00,
    quantity:1,
},
{
    id:5,
    name:"harry potter and the order of the phoenix",
    img: "order.jpg",
    price:17.99,
    quantity:1,
},
{
    id:6,
    name:"harry potter and the half-blood prince",
    img: "halfblood.jpg",
    price:62.03,
    quantity:1,
},
{
    id:7,
    name:"harry potter and the deathly hallows",
    img: "deathly.jpg",
    price:23.01,
    quantity:1,
},
{
    id:8,
    name:"harry potter and the cursed child",
    img: "cursed.jpg",
    price:69.08,
    quantity:1,
}];
function initapp(){
    nvls.forEach((value,key)=>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src="../img/${value.img}">
<div class="name">${value.name}</div>
<div class="price">${value.price.toLocaleString()}</div>
<button class="btn" onclick="addToCard(${key})">Add To Cart</button>   
        `;
nvlsdom.appendChild(newDiv);
    })
}
initapp();

let card=[];
function addToCard(key){
  if( card[key]== null){
    card[key] = nvls[key];
    card[key].num = 1;
  }
  reload();
};
function reload(){
    urcard.innerHTML= ' ';
    let count =0;
    let totalpric =0;
    card.forEach((value, key) => {
        totalpric = totalpric + value.price;
        count=count+ value.quantity;
        if(value != null){
            let newDiv = document.createElement('div');
            newDiv.innerHTML=`
            <div><img src="../img/${value.img}"></div>
<div class="namer">${value.name}</div>
<div class="pricer">${value.price.toLocaleString()}</div>
<div>
<button class="btnr1" onclick="changeQuantity(${key},${value.quantity  -1})">-</button>
<div class="count" > ${value.quantity}</div>
<button class="btnr2" onclick="changeQuantity(${key}, ${value.quantity  +1})">+</button>
            
</div>     `;
urcard.appendChild(newDiv);

        }

    })
    totalprice.innerHTML = totalpric.toLocaleString();
    num.innerHTML =count;
};

function changeQuantity(key,num){
    if(num==0){
        delete cards[key];
    }else{
        card[key].quantity= num;
        card[key].price= num*nvls[key].price;
        }
        reload();
};



 const buy = document.querySelector('.buy');
 const payment = document.querySelector('.paymentt');
 const closecard = document.querySelector('.closecard');

buy.addEventListener('click' ,()=>
 {
    payment.style.display = "flex" ;
   
    
  
 });
 closecard.addEventListener('click' ,()=>
{
    payment.style.display = "none" ;
    
});