var productsData = {
    category1: [
      { name: 'Товар 1', info: 'Інформація про товар 1' },
      { name: 'Товар 2', info: 'Інформація про товар 2' },
      { name: 'Товар 3', info: 'Інформація про товар 3' }
    ],
    category2: [
      { name: 'Товар 4', info: 'Інформація про товар 4' },
      { name: 'Товар 5', info: 'Інформація про товар 5' },
      { name: 'Товар 6', info: 'Інформація про товар 6' }
    ],
    category3: [
      { name: 'Товар 7', info: 'Інформація про товар 7' },
      { name: 'Товар 8', info: 'Інформація про товар 8' },
      { name: 'Товар 9', info: 'Інформація про товар 9' }
    ]
  };
  
  function showProducts(category) {
    var productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очистити список товарів
    
    // Додати товари до списку
    productsData[category].forEach(function(product) {
      var li = document.createElement('li');
      li.innerText = product.name;
      li.onclick = function() {
        showProductInfo(product);
      };
      productList.appendChild(li);
    });
  }
  
  function showProductInfo(product) {
    var productInfo = document.getElementById('product-info');
    productInfo.innerHTML = ''; // Очистити інформацію про товар
    
    // Додати інформацію про товар
    var info = document.createElement('p');
    info.innerText = product.info;
    productInfo.appendChild(info);
    
    // Додати кнопку "купити"
    var buyButton = document.createElement('button');
    buyButton.innerText = 'Купити';
    buyButton.onclick = function() {
      alert('Товар куплений');
      resetProgram();
    };
    productInfo.appendChild(buyButton);
  }
  
  function resetProgram() {
    var productList = document.getElementById('product-list');
    var productInfo = document.getElementById('product-info');
    
    productList.innerHTML = ''; // Очистити список товарів
    productInfo.innerHTML = ''; // Очистити інформацію про товар
  }