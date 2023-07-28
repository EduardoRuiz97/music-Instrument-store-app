import { useDispatch } from "react-redux";
import { cartSliceActions } from "./car-slice";

export const sendCartData = (cartItems, totalCost) => {

  return async () => {

    const data = {
      items: cartItems,
      total: totalCost
    };

    const sendRequest = async () => {
      const response = await fetch('https://instruments-364af-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        return;
      }
    }

    try {
      await sendRequest();

    } catch(error) {}
  }
};


export const fetchCartData = () => {
  return async () => {
    const fetchData = async () => {
      const response =  await fetch('https://instruments-364af-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        return;
      };

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      const dispatch = useDispatch();

      dispatch(cartSliceActions.updateCart({
        items: cartData || [],
      }))


    } catch(error) {}
  }
}