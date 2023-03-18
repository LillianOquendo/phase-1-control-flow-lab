let x = 56;
function scuberGreetingForFeet(x){
if (x <= 400){
return ('This one is on me!');
}
else if (x > 400 && x <= 2000){
return ('That will be twenty bucks.');
}
else if (x > 2000 && x < 2499){
  return ('I will gladly take your thirty bucks.');
}
else if (x >= 2500){
return ('No can do.');
}
}
let y = ('Chicago')
function ternaryCheckCity(y){
 return y === 'NYC'? 'Ok, sounds good.': `No go.`
}
let z = ('')
function switchOnCharmFromTip(z){
  switch (z){
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  default:
    return 'Bye.'
}
}