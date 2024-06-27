import React from 'react';
import list from '../../public/menslist.json';
import Card from './Card';

function MenCards() {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {list.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MenCards;
