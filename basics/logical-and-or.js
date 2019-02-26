let isGuestOneVegan = true
let isGuestTwoVegan = false

//are both vegan, offer only vegan
if( isGuestOneVegan && isGuestTwoVegan){
  console.log("Here's our vegan menu")
}else if (isGuestOneVegan || isGuestTwoVegan){
  console.log("Here's the vegan and non vegan specials")
}else{
  console.log("Here's the full menu")
}
//if one is vegan, offer both 
//else offer anything on the menu