import {names, specs} from "./productInfo.js"

const cpu = [];
const gpu = [];
const ram = [];
const storage = [];
specs.forEach((el)=>cpu.push(el.CPU));
specs.forEach((el)=>gpu.push(el.GPU));
specs.forEach((el)=>ram.push(el.RAM));
specs.forEach((el)=>storage.push(el.STORAGE));


const card = document.querySelector(".contentBox") 
const button = document.getElementById("Lunar_I")
button.addEventListener("click", function(event){ 
  function divCreator(){
      card.insertAdjacentHTML(
          "beforeend",
          `<div class=specs><ul>${cpu[0]} ${ram[0]} ${gpu[0]} ${storage[0]}<ul></div>`,
      );
      }
  divCreator();
        });
