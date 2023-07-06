import { useLocalStorageCartEffect, useUIDgenerator } from "use100hooks";

const LocalStorageCartEffect = () => {
  const [cartItems, addToCart, removeFromCart, updateCartItem] =
    useLocalStorageCartEffect();
  const uuid = useUIDgenerator("v1");
  const uuid2 = useUIDgenerator("v1");

  const handleAddToCartProduct1 = () => {
    const item = {
      id: uuid,
      name: "Product 1",
      price: 10,
      quantity: 1,
    };
    addToCart(item);
  };

  const handleAddToCartProduct2 = () => {
    const item = {
      id: uuid2,
      name: "Product 2",
      price: 10,
      quantity: 1,
    };
    addToCart(item);
  };

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateCartItem(id, quantity);
  };

  return (
    <div className="text-left">
      <div className="mb-4">
        <h1>Product 1</h1>
        <button
          className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={handleAddToCartProduct1}
        >
          Add to Cart
        </button>
      </div>
      <div className="mb-4">
        <h1>Product 2</h1>
        <button
          className="text-white w-full mt-4 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          onClick={handleAddToCartProduct2}
        >
          Add to Cart
        </button>
      </div>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center mb-4">
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button
              className="text-white w-auto mx-4 bg-red-500  font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-sky-600 "
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
            <input
              type="number"
              className="block w-15 p-3 text-sm text-gray-900 border border-sky-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
              value={item.quantity}
              onChange={(e) =>
                handleUpdateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LocalStorageCartEffect;
