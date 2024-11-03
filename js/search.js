fetch('collection.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const allProducts = data.categories.flatMap(category => category.products);
        setupSearch(allProducts)
    })



// Function to setup search functionality
function setupSearch(products) {
    const searchInput = document.getElementById('search-input');
    const searchResultsDiv = document.getElementById('search-results');
    if (!searchInput || !searchResultsDiv) {
        console.error('Search elements not found');
        return;
    }
    searchInput.addEventListener('keyup', function () {
        const searchQuery = searchInput.value.toLowerCase();
        console.log('Search query:', searchQuery); // Debugging line

        if (searchQuery === '') {
            searchResultsDiv.innerHTML = ''; // Clear results when the search input is empty
            return;
        }

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery)
        );

        console.log('Filtered products:', filteredProducts); // Debugging line

        displaySearchResults(filteredProducts);
    });
}

// Function to display search results
function displaySearchResults(products) {
    const searchResultsDiv = document.getElementById('search-results');
    const scrrslt=document.getElementById('scr-rslt');
    const searchsection=document.getElementById("search-section")
    searchResultsDiv.innerHTML = '';

    if (products.length > 0) {
        searchsection.style.display="block";
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'scr-category-item';
            productDiv.innerHTML = `
              <div class="scr-product-img">
                <img class="image1 images" src="${product.image}" alt="${product.name}" />
              </div>
              <div class="scr-product-name">
                <h1>${product.name}</h1>
              </div>
              <div class="scr-product-price">
                <h1>Rs: ₹${product.price}</h1>
              </div>
            
              </div>
            `;
            searchResultsDiv.append(productDiv);
            productDiv.querySelector(".scr-product-img").addEventListener("click", () => {
                window.location.href = `viewproduct.html?productname=${product.name}`;
              });
        });
       
    } else {
        searchResultsDiv.innerHTML = '<p class="scr-result">No products found</p>';
    }
}