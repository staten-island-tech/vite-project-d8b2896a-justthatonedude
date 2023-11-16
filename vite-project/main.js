import './css/style.css'
import {names, salePrice, specs} from './productInfo.js'


document.querySelector('#app').innerHTML = (`
<h1>TOTALLY NOT A STARFORGE RIPOFF FOR FUNNY</h1>
<div class = "app">
<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/Core_8b2a8099-2dac-4f34-8893-2157c026dc9a.png?v=1698933733&width=832" alt="LUNAR I" class="product">
  </div>

  <div class="contentBox">
    <h3>${names[0]}</h3>
    <h2 class="price">${salePrice[0]}</h2>
    <a href="#" id=Lunar_I id class="specifications">Specifications</a>

  </div>

</div>
<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/Ultra_7ae7a781-ec5f-46a0-8f67-4fe2ee34910a.png?v=1698933777&width=832" alt="LUNAR II" class="product">
  </div>

  <div class="contentBox">
    <h3>${names[1]}</h3>
    <h2 class="price">${salePrice[1]}</h2>
    <a href="#" id=Lunar_II class="specifications">Specifications</a>

  </div>

</div>

<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/Sentinel_4f57e2e2-f88d-497f-95df-847864fd08a3.png?v=1698933788&width=832" alt="LUNAR V" class="product">
  </div>

  <div class="contentBox">
    <h3>${names[2]}</h3>
    <h2 class="price">${salePrice[2]}</h2>
    <a href="#" id=Lunar_V class="specifications">Specifications</a>

  </div>

</div>
<div class="card">

  <div class="imgBox">
    <img src="https://starforgesystems.com/cdn/shop/files/voyager-elite-purplegreen-product-img-cuouts.png?v=1699035879&width=832" alt="LUNAR X" class="product">
  </div>

  <div class="contentBox">
    <h3>${names[3]}</h3>
    <h2 class="price">${salePrice[3]}</h2>
    <a href="#" id=Lunar_X class="specifications">Specifications</a>

  </div>

</div>
<button id="theme">Theme Switch<button>
</div>

`);


