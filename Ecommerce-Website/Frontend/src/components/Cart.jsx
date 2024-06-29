import React, { useContext, useEffect } from 'react';
import { Shoplist } from '../store/store-list'; // Adjust the path as necessary
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const { cart, dispatch } = useContext(Shoplist);

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity: newQuantity } });
  };

  // Function to remove item from cart
  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  // Function to calculate total (assuming no shipping cost for this example)
  const calculateTotal = () => {
    return calculateSubtotal();
  };

  useEffect(() => {
    // Scroll to the top of the cart section on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex justify-center my-40 px-5 ">
      <section className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-3 gap-3 pb-10 ">
        {/* Cart items */}
        <div className="lg:col-span-2 overflow-y-auto max-h-[600px] order-2 lg:order-1 ">
          <table className="table-fixed w-full ">
            <thead className="h-16 bg-neutral-100 dark:bg-slate-700">
              <tr>
                <th className="w-2/5">ITEM</th>
                <th className="w-1/5">PRICE</th>
                <th className="w-1/5">QUANTITY</th>
                <th className="w-1/5">TOTAL</th>
                <th className="w-1/5"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="h-[100px] border-b">
                  <td className="align-middle">
                    <div className="flex">
                      <img
                        className="w-[90px]"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="ml-3 flex flex-col justify-center">
                        <p className="text-md font-bold">{item.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="mx-auto text-center">${item.price}</td>
                  <td className="align-middle">
                    <div className="flex items-center justify-center">
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        −
                      </button>
                      <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        {item.quantity}
                      </div>
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="mx-auto text-center">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="align-middle">
                    <FaTrashAlt
                      onClick={() => removeItem(index)}
                      className="m-0 h-5 w-5 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="ml-0 lg:ml-10 w-full lg:w-[350px] order-2 lg:order-2 mb-10 lg:mb-0">
          <div className="border py-5 px-4 shadow-md">
            <p className="font-bold text-lg mb-4">ORDER SUMMARY</p>
            <div className="flex justify-between border-b py-2">
              <p>Subtotal:</p>
              <p>${calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="font-bold">Total:</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <button className="w-full bg-violet-900 px-5 py-2 text-white rounded-md mt-4">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
