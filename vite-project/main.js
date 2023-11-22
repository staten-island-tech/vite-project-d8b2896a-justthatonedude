import './css/style.css'
import {names, salePrice} from './js/productInfo.js'


document.querySelector('#app').innerHTML = (`
<h1>Lunar Systems</h1>
<div class = "app">
<div class = "button" id=Lunar_I>${names[0]}</div>
<div class = "button" id=Lunar_II>${names[1]}</div>
<div class = "button" id=Lunar_V>${names[2]}</div>
<div class = "button" id=Lunar_X>${names[3]}</div>
<button id="theme">Theme Switch</button>
</div>

`);


