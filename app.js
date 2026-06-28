const inpBox = document.querySelector("input")
const profitBtn = document.querySelector(".profit")
const lossBtn = document.querySelector(".loss")
const screen = document.querySelector(".amount")
const summery= document.querySelector(".summery")

let pasa = 0

//  const li = document.createElement("li")
//  li.textContent= Number(inpBox.value)
 
//  summery.append(li)


profitBtn.addEventListener("click", function(){
    
 pasa = pasa + Number(inpBox.value)
screen.textContent =pasa
 const li = document.createElement("li")
 li.textContent=  ` Profit:    +${pasa}`
 li.style.backgroundColor ="green"
 
 summery.append(li)
    inpBox.value =""
})


lossBtn.addEventListener("click", function(){
  pasa = pasa - Number(inpBox.value)
    screen.textContent = pasa
    
    const li = document.createElement("li")
 li.textContent=  ` loss:   -${pasa}`
 li.style.backgroundColor ="red"
 
 summery.append(li)
    inpBox.value =""
}) 