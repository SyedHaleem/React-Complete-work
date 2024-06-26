import React from 'react'
import list from '../../public/kidslist.json';
import Card from './Card';

function KidCards() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5'>
        {list.map((product, index) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
  )
}

export default KidCards