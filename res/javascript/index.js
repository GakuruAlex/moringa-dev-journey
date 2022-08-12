


const myMenu = {
  frenchFriesPlain: "French Fries ",

 frenchFriesSalad: "French Fries with Salad",

 frenchFriesSaladTmtSauce: "French Fries with Tomato paste and Salad",

 frenchFriesTomatopasteSalad300mlCoke: "French Fries , Tomato paste,  Salad and a 300ml Coke ",

 chickenSpecial: "Chicken Special",

 chickenSpecialCoke: "Chicken Special + Coke",

};



  function addMenuListener(){
    const btn =document.querySelectorAll(`button`);

    const lengthOfButtonsArray= btn.length;

    for(let i=0;i<lengthOfButtonsArray;i++){

      btn[i].addEventListener('click',menuSelected);


  }


  function menuSelected(e){

      //get id of button clicked
    let elemBtn = e.target.id;

       if(elemBtn==="chickenSpecial"){

        alert(`Menu selected is : ${myMenu["chickenSpecial"]}`);

       }
       else if(elemBtn==="frenchFriesPlain"){

          alert(`Menu selected is ${myMenu["frenchFriesPlain"]}`);
       }

       else if(elemBtn==="frenchFriesSalad"){
        alert(`Menu selected is ${myMenu["frenchFriesSalad"]}`);

       }
       else if(elemBtn==="frenchFriesTomatopasteSalad300mlCoke"){
        alert(`Menu selected is ${myMenu["frenchFriesTomatopasteSalad300mlCoke"]}`);
        //console.log(`Menu selected is ${myMenu["frenchFriesTomatopasteSalad300mlCoke"]}`);

       }


        else{
          alert(`Clicked menu reserved for control protocal`);
        }
    }


  }

  addMenuListener()