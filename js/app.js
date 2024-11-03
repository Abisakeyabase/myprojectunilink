fetch('collection.json')
    .then(response => response.json())
    .then(data => {
        console.log("whole data",data);
        // const allProducts = data.categories.flatMap(category => category.products);
        displaycategory(data);
    })
   
//display feature categorys
function displaycategory(data) {
    let ftrdiv = document.getElementById("ftr-col");
    const ftrproducts = data.categories;
    console.log( "categories data",ftrproducts)
    ftrproducts.forEach(categ => {
        const catdiv = document.createElement('div');
        catdiv.className = 'ftr-category-item';

        catdiv.innerHTML = `
        <div class="ftr-imgdiv">
    <img src=${categ.image} class="ftr-catdiv-img">
    </div>
    <h2 class="ftr-catdiv-name">${categ.category}</h2><br>
    `;
    catdiv.addEventListener("click",()=>{
        window.location.href=`catproduc.html?category=${categ.category}`;
           console.log(categ.category);
        })
        loginbtn.addEventListener('click', function(){
            window.location.href="loginpage.html";
        })
    ftrdiv.append(catdiv);
    });
   
}

function updateCartCount(){
    const cart=JSON.parse(localStorage.getItem("cart"));
    const cartCount=cart.reduce((total,element)=> total+(element.Quantity ||0),0);
    document.querySelector(".addtocartvalue").textContent = cartCount;

 }

 document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
 });


 document.addEventListener("DOMContentLoaded",()=>{
    loadfunction();
 })

 function loadfunction(){
         

 }
  
  

