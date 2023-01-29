import Telephone from "./class.js";
import Observer from "./Observe.js";
import Observer2 from "./Observer2.js";
const addNumBtn = document.querySelector(".addNum")
let DelNumBtn = document.querySelector("#deleteNum")
let DialNumBtn = document.querySelector("#dialNum")
let ElementObserver = document.querySelector("#observer-one")
let ElementObserver2 = document.querySelector("#observer-two")
//Instantiate the Telephone class
const Tel = new Telephone(ElementObserver2)
const eObserver1 = new Observer(ElementObserver)
const eObserver2 = new Observer2(ElementObserver2)
Tel.addObserver(eObserver1)
Tel.addObserver2(eObserver2)

addNumBtn.addEventListener("click",()=>{
  Tel.addNumber()
  Tel.deleteNumber()
})

DelNumBtn.addEventListener("click",()=>{
  Tel.deleteNumber()
})

DialNumBtn.addEventListener("click",()=>{
  Tel.dialNumber()
})