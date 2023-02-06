import React from 'react'

function Pokemon({pokemon}) {



  return (
    <div><img src={pokemon.sprites.front_shiny}/></div> //question mark means enter.sprites if the sprite key exists on that object
  )
}

export default Pokemon