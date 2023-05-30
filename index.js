

let productContainer=document.getElementById('products')
const getProducts=()=>{
     return fetch(`https://dummyjson.com/products`)
      .then(response=>response.json())
      .then(response=>response)
      .catch(error=>error.message)
  };
 const displayProducts=async()=>{
       const products= await getProducts();
       console.log(products.products)
      products.products.map(item=>{
          let div=document.createElement('div')
          div.className='items'

        let img=document.createElement('img')
          let name=document.createElement('h2')
          let describe=document.createElement('p')
           let prices=document.createElement('p')
          let ratings=document.createElement('p')
          let discount=document.createElement('p')

        img.src=item.imageUrl
         name.innerHTML=item.title;
         describe.innerHTML=item.description;
         prices.innerHTML= `Price: $` + item.price;
          ratings.innerHTML=`Rating: $` + item.rating;
         discount.innerHTML=`Discount: `+ item.discountPercentage + `%`;
         div.appendChild(img)
           div.appendChild(name)
           div.appendChild(describe)
         div.appendChild(prices)
          div.appendChild(ratings)
           div.appendChild(discount)
          productContainer.appendChild(div)
       });
   };
   displayProducts();
  
  
  
  
  
  
  
  
  
  


