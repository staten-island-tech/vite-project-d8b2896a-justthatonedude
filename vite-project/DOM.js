import {names, specs} from "./productInfo.js"

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
    Card: document.querySelectorAll(".card"),
    ContentBox: document.querySelectorAll(".contentBox"),
    imgBox: document.querySelectorAll(".imgBox"),
};
DOM.LunarI.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarI.insertAdjacentHTML(
          "afterend",
          `<li>${cpu[0]}</li><li>${ram[0]}</li><li>${gpu[0]}</li><li>${storage[0]}</li><li>${psu[0]}</li>`,
      );
      };
  divCreator();
        });
DOM.LunarII.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarII.insertAdjacentHTML(
          "afterend",
          `<li>${cpu[1]}</li><li>${ram[1]}</li><li>${gpu[1]}</li><li>${storage[1]}</li><li>${psu[1]}</li>`,
      );
      };
  divCreator();
        });
DOM.LunarV.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarV.insertAdjacentHTML(
          "afterend",
          `<li>${cpu[2]}</li><li>${ram[2]}</li><li>${gpu[2]}</li><li>${storage[2]}</li><li>${psu[2]}</li>`,
      );
      };
  divCreator();
        });
DOM.LunarX.addEventListener("click", function(event){ 
  function divCreator(){
      DOM.LunarX.insertAdjacentHTML(
          "afterend",
          `<li>${cpu[3]}</li><li>${ram[3]}</li><li>${gpu[3]}</li><li>${storage[3]}</li><li>${psu[3]}</li>`,
      );
      };
  divCreator();
        });
DOM.Theme.addEventListener("click", function(event){
    function themeChanger(){
        DOM.MainPage.classList.toggle("stealth-mode")
        DOM.ContentBox.forEach((el)=>el.classList.toggle("card-stealth-mode"))
        DOM.Card.forEach((el)=>el.classList.toggle("card-stealth-mode"))
        DOM.imgBox.forEach((el)=>el.classList.toggle("card-stealth-mode")) 
    }
    themeChanger();
});