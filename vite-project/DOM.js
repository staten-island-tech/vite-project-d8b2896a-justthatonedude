import {names, specs, salePrice} from "./js/productInfo.js"

const cpu = [];
const gpu = [];
const ram = [];
const storage = [];
const psu = [];
specs.forEach((el)=>cpu.push(el.CPU));
specs.forEach((el)=>gpu.push(el.GPU));
specs.forEach((el)=>ram.push(el.RAM));
specs.forEach((el)=>storage.push(el.STORAGE));
specs.forEach((el)=>psu.push(el.PSU));
const DOM = {
    MainPage: document.querySelector("body"),
    Theme: document.getElementById("theme"),
    LunarI: document.getElementById("Lunar_I"),
    LunarII: document.getElementById("Lunar_II"),
    LunarV: document.getElementById("Lunar_V"),
    LunarX: document.getElementById("Lunar_X"),
};
DOM.LunarI.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarI.insertAdjacentHTML(
          "afterend",
          `<div class="card">

          <div class="imgBox">
            <img src="https://starforgesystems.com/cdn/shop/files/Horizon2Adjusted-product-img-cuouts.png?v=1700242711&width=832" alt="LUNAR I" class="product">
          </div>
        
          <div class="contentBox">
            <h3>${names[0]}</h3>
            <h2 class="price">${salePrice[0]}</h2>
            <li>${cpu[0]}</li><li>${ram[0]}</li><li>${gpu[0]}</li><li>${storage[0]}</li><li>${psu[0]}</li>
          </div>
        
        </div>`,
      );
      };
  divCreator();
        });
DOM.LunarII.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarII.insertAdjacentHTML(
          "afterend",
          `<div class="card">

          <div class="imgBox">
            <img src="https://starforgesystems.com/cdn/shop/files/Ultra_7ae7a781-ec5f-46a0-8f67-4fe2ee34910a.png?v=1698933777&width=832" alt="LUNAR II" class="product">
          </div>
        
          <div class="contentBox">
            <h3>${names[1]}</h3>
            <h2 class="price">${salePrice[1]}</h2>
            <li>${cpu[1]}</li><li>${ram[1]}</li><li>${gpu[1]}</li><li>${storage[1]}</li><li>${psu[1]}</li>
          </div>
        
        </div>`,
      );
      };
  divCreator();
        });
DOM.LunarV.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarV.insertAdjacentHTML(
          "afterend",
          `<div class="card">

          <div class="imgBox">
            <img src="https://starforgesystems.com/cdn/shop/files/Sentinel_4f57e2e2-f88d-497f-95df-847864fd08a3.png?v=1698933788&width=832" alt="LUNAR V" class="product">
          </div>
        
          <div class="contentBox">
            <h3>${names[2]}</h3>
            <h2 class="price">${salePrice[2]}</h2>
            <li>${cpu[2]}</li><li>${ram[2]}</li><li>${gpu[2]}</li><li>${storage[2]}</li><li>${psu[2]}</li>

          </div>`,
      );
      };
  divCreator();
        });
DOM.LunarX.addEventListener("click", function(event){ 
  function divCreator(){
        DOM.LunarX.insertAdjacentHTML(
            "afterend",
            `<div class="card">

            <div class="imgBox">
                <img src="https://starforgesystems.com/cdn/shop/files/voyager-elite-purplegreen-product-img-cuouts.png?v=1699035879&width=832" alt="LUNAR X" class="product">
            </div>
        
            <div class="contentBox">
                <h3>${names[3]}</h3>
                <h2 class="price">${salePrice[3]}</h2>
                <li>${cpu[3]}</li><li>${ram[3]}</li><li>${gpu[3]}</li><li>${storage[3]}</li><li>${psu[3]}</li>
        
            </div>
        
            </div>`,
    )};
  divCreator();
        });
DOM.Theme.addEventListener("click", function(event){
    function themeChanger(){
        const card = document.querySelectorAll(".card")
        const contentBox = document.querySelectorAll(".contentBox")
        const imgBox = document.querySelectorAll(".imgBox")
        DOM.MainPage.classList.toggle("stealth-mode")
        contentBox.forEach((el)=>el.classList.toggle("card-stealth-mode"))
        card.forEach((el)=>el.classList.toggle("card-stealth-mode"))
        imgBox.forEach((el)=>el.classList.toggle("card-stealth-mode")) 
    }
    themeChanger();
});