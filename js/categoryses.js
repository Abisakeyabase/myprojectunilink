
function showCategoryFromUrl() {
    const urlparams = new URLSearchParams(window.location.search);
    const CategoryName = urlparams.get("category");
  
    console.log("Category from URL:", CategoryName);
  
    fetch("collection.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
        const foundproduct = data.categories.find((categori) => categori.category == CategoryName);
        console.log(foundproduct);
        
  
        if (foundproduct) {
          console.log("Found Category:", foundproduct);
          const row = document.querySelector(".product-row");
          row.innerHTML = ""; 
  
          foundproduct.products.forEach((product) => {
            const col = document.createElement("div");
            col.classList.add("product-col");
            col.innerHTML = `
              <div class="product-img">
                <img class="image1 images" src="${product.image}" alt="${product.Name}" />
              </div>
              <div class="product-name">
                <h1>${product.name}</h1>
              </div>
              <div class="product-price">
                <h1>Rs: ₹${product.price}</h1>
              </div>
              <div class="product-quantity">
              <button class="product-quantity-btn1">-</button>
              <input type="text" class="product-quantity-inp" value="1" readonly></input>
              <button class="product-quantity-btn1">+</button>
              </div>
              
              <div class="addtocart">
              
              <button class="add-to-cart-btn">Add to <i class="fa fa-cart-shopping fa-xl"></i></button>
              <button class="addcart-viewbtn">Buy now</button>
              </div>
            `;
            row.append(col)
            col.querySelector(".add-to-cart-btn").addEventListener("click", ()=>{
              addtocart(product.name)
             });
             col.querySelector(".product-img").addEventListener("click", () => {
              window.location.href = `viewproduct.html?productname=${product.name}`;
            });
            col.querySelector(".addcart-viewbtn").addEventListener("click", () => {
              window.location.href = `orderpage.html?productname=${product.name}`;
            });
          
          });
        } else {
          console.log("No matching category found.");
        }
        }) 
        .catch((error) => {
          console.log("Error fetching data:", error);
        });

  }
  showCategoryFromUrl();
  function addtocart(productname){
    let cart=JSON.parse(localStorage.getItem("cart")) ||[];
    let existingproduct=cart.find((product)=>product.product==productname);
    if(existingproduct){
        existingproduct.quantity+=1;
    }
    else{
        cart.push({product:productname,quantity:1});
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${productname} added to cart`)
}
function updateCartCount(){
  const cart=JSON.parse(localStorage.getItem("cart"));
  const cartCount=cart.reduce((total,element)=> total+(element.Quantity ||0),0);
  document.querySelector(".addtocartvalue").textContent = cartCount;

}
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
const carts=document.getElementById("cartbtn");
carts.addEventListener('click', ()=>{
    window.location.href="cart.html"
})
loginbtn.addEventListener('click', function(){
  window.location.href="loginpage.html";
})

