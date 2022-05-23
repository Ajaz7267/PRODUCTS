//store the products array in localstorage as "products"
let item =JSON.parse(localStorage.getItem("products"))||[];

function Pro(t,d,p,i){
    this.type=t
    this.desc=d
    this.price=p
    this.image=i
}
function addToProducts(e){
    e.preventDefault();

    let form  =  document.getElementById("products")
    let type  =  form.type.value;
    let desc  =  form.desc.value;
    let price =  form.price.value;
    let image =  form.image.value;

    // console.log(type,desc,price,image);
    let pd = new Pro(image,type,desc,price);
    item.push(pd);

    localStorage.setItem("products",JSON.stringify(item));
    // console.log(pd);
}