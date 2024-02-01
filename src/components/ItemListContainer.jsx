import React from 'react'
function ItemListContainer({mensaje, subMensaje}) {
  return (
    <div className='itemListContainer'>
      <p className='h1 flex justify-center pt-9'>{mensaje}</p>
      <p className='h2 flex justify-center'>{subMensaje}</p>
    </div>
  )
}

export default ItemListContainer