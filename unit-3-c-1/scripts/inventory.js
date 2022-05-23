let item =JSON.parse(localStorage.getItem("products"))||[];

let all_products = document.getElementById("all_products");
all_products.innerHTML = null

item.map(function(elem,index)
{
    let box = document.createElement("div");
    
    let imag = document.createElement("img");
    imag.src = elem.image

    let type =document.createElement("p");
    type.setAttribute("id","para")
    type.innerText = elem.type

    let desc =document.createElement("p");
    desc.setAttribute("id","para1")
    desc.innerText = elem.desc
    desc.style.textAlign="center";


    let price =document.createElement("p");
    price.setAttribute("id","para2")
    price.innerText = elem.price
    price.style.textAlign="center";

    let remove = document.createElement("button");
    remove.innerText="Remove Product"
    remove.setAttribute("id","remove_product")
    

    remove.addEventListener("click",function(){
        removeProduct(elem,index)
    })

    box.append(imag,type,desc,price,remove);
    all_products.append(box)

    function removeProduct(elem,index){
        item.splice(index,1)
        localStorage.setItem("products",JSON.stringify(item));
        window.location.reload()
    }
})