import React, { useContext } from "react";
// import { connect } from "react-redux";

import MainNavigation from "../components/MainNavigation";
import { ShopContext } from "../context/shop-context";
import { CountContext } from "../context/count-context";
// import { addProductToCart } from "../store/actions";
import "./Products.css";

function ProductsPage() {
  const context = useContext(ShopContext);
  const countContext = useContext(CountContext);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="products">
        <strong>Count is {countContext.count}</strong>
        <button onClick={countContext.addCount}>Add</button>
        <ul>
          {context.products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={context.addProductToCart.bind(this, product)}>
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
