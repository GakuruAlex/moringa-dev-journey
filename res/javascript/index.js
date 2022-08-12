const btn =document.querySelectorAll(`button`);

const len= btn.length;



const myMenu = {
  frenchFriesPlain: "French Fries plain",

 frenchFriesSalad: "French Fries + Salad",

 frenchFriesSaladTmtSauce: "French Fries + Tomato paste + Salad",

 frenchFriesTomatopasteSalad300mlCoke: "French Fries + Tomato paste + Salad + 300ml Coke ",

 chickenSpecial: "Chicken Special",

 chickenSpecialCoke: "Chicken Special + Coke",

};



function menuSelected(){

  alert(`Button clicked`);

};

for(let i=0;i<len;i++){
  btn[i].addEventListener('click',menuSelected);

};
