
function draw (){
  const canvas = document.getElementById('canvas')
  
  if(canvas.getContext('2d')){
    const ctx = canvas.getContext('2d')
    // echéquier
    

  }else{
    console.log('Le canvas ne fonctionne pas')
  }
  return draw
}

draw()