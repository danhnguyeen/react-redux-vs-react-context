import React, { useContext } from "react";
// import { connect } from 'react-redux';

import MainNavigation from "../components/MainNavigation";
import { ShopContext } from "../context/shop-context";
import { CountContext } from "../context/count-context";
// import { removeProductFromCart } from '../store/actions';
import "./Cart.css";

function CartPage() {
  const context = useContext(ShopContext);
  const countContext = useContext(CountContext);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        <strong>Count is {countContext.count}</strong>
        <button onClick={countContext.addCount}>Add</button>
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartPage);
export default CartPage;
