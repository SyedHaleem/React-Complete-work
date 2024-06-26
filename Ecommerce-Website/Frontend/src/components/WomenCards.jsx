import React from 'react';
import Card from './Card';
import list from '../../public/womenslist.json';

function WomenCards() {
  console.log(list);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5'>
      {list.map((product, index) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default WomenCards;
