import './css/style.css'
import javascriptLogo from './javascript.svg'

import {names, specs, salePrice} from './productInfo.js'


document.querySelector('#app').innerHTML = (`
<h1>TOTALLY NOT A STARFORGE RIPOFF FOR FUNNY</h1>
<div class = "app">
<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/Core_8b2a8099-2dac-4f34-8893-2157c026dc9a.png?v=1698933733&width=832" alt="LUNAR I" class="mouse">
  </div>

  <div class="contentBox">
    <h3>${names[0]}</h3>
    <h2 class="price">${salePrice[0]}</h2>
    <a href="#" class="buy">Buy Now</a>
  </div>

</div>
<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/Ultra_7ae7a781-ec5f-46a0-8f67-4fe2ee34910a.png?v=1698933777&width=832" alt="LUNAR II" class="mouse">
  </div>

  <div class="contentBox">
    <h3>${names[1]}</h3>
    <h2 class="price">${salePrice[1]}</h2>
    <a href="#" class="buy">Buy Now</a>
  </div>

</div>

<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/Sentinel_4f57e2e2-f88d-497f-95df-847864fd08a3.png?v=1698933788&width=832" alt="LUNAR V" class="mouse">
  </div>

  <div class="contentBox">
    <h3>${names[2]}</h3>
    <h2 class="price">${salePrice[2]}</h2>
    <a href="#" class="buy">Buy Now</a>
  </div>

</div>
<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/voyager-elite-purplegreen-product-img-cuouts.png?v=1699035879&width=832" alt="LUNAR X" class="mouse">
  </div>

  <div class="contentBox">
    <h3>${names[3]}</h3>
    <h2 class="price">${salePrice[3]}</h2>
    <a href="#" class="buy">Buy Now</a>
  </div>

</div>
</div>

`);


