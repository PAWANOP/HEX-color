function changeColor(){
  let hex_number = ['0','1','2','3','4',]

  let hexcode = "";


  for (i=0 ;i<6;i++) {
    let random_index=Math.floor(Math.random()*hex_number.length);
    hexcode+=hex_number[random_index];
  }
  
  document.getElementById('hex-code').innerHTML=hexcode;
  document.body.style.backgroundColor='#'+hexcode;

}