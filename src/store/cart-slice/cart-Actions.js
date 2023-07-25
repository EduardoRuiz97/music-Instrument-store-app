import { json } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "./cart-slice";

export const sendCartData = (data) => {
  return async () => {

    const sendRequest = async () => {
      const response = await fetch('https://instruments-364af-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw json({message: 'could not send data to the server. Try again'},{status: 500})
      }
    }

    try {
      await sendRequest();

    } catch(error) {

    }
  }
};


export const fetchCartData = () => {
  return async () => {
    const fetchData = async () => {
      const response =  await fetch('https://instruments-364af-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw json({message: 'could not fetch data from the server. Try again'},{status: 500})
      };

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      const dispatch = useDispatch();


      if (cartData.length === 0) {
        localStorage.setItem('cartIsEmpty', true);
      } else {
        localStorage.setItem('cartIsEmpty', false);
      }

      dispatch(cartActions.replaceItems({
        items: cartData || [],
      }))


    } catch(error) {

    }
  }
}