import React from "react";

import MainNavigation from "../components/MainNavigation";
import {useShop, useCount} from "../context";
import "./Products.css";

function ProductsPage() {
  const shopContext = useShop();
  const countContext = useCount();

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={shopContext.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="products">
        <strong>Count is {countContext.count}</strong>
        <button onClick={countContext.addCount}>Add</button>
        <ul>
          {shopContext.products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={shopContext.addProductToCart.bind(this, product)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addProductToCart: (product) => dispatch(addProductToCart(product)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
export default ProductsPage;
