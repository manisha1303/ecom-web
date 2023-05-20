import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./chkcss.css";

export const Checkout = () => {
  const { clearCart, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth0();

  const onHandleSubmit = () => {
    alert("Order Placed !!!", clearCart(), navigate("/"));
  };

  return (
    <div>
      {totalAmount > 0 ? (
        <div className="form-control divcen">
          <div className="cnt">
            <h1>Please fill Billing and Delivery Details </h1>
          </div>

          <div className="tbl">
            <form onSubmit={onHandleSubmit}>
              <table className="table">
                <tr className="rw">
                  <td>Full Name: </td>
                  <td>
                    <input
                      type="text"
                      name="txtName"
                      id="txtName"
                      className="txtbox"
                      required
                    />
                  </td>
                </tr>
                <tr className="rw">
                  <td>Emailid: </td>

                  <td>
                      <input
                        type="text"
                        name="txtAdd"
                        id="txtLoc"
                        className="txtbox"
                        required
                      />
                  </td>
                </tr>
                <tr className="rw">
                  <td>Full Address: </td>
                  <td>
                    <textarea className="txtArea" required></textarea>
                  </td>
                </tr>
                <tr className="rw">
                  <td>City: </td>
                  <td>
                    <input
                      type="text"
                      name="txtAdd"
                      id="txtLoc"
                      className="txtbox"
                      required
                    />
                  </td>
                </tr>
                <tr className="rw">
                  <td>Mobile Number: </td>
                  <td>
                    <input
                      type="number"
                      name="txtAdd"
                      id="txtLoc"
                      className="txtbox"
                      required
                    />
                  </td>
                </tr>
                <tr className="rw">
                  <td>Total Amount: </td>
                  <td>Rs. {totalAmount}</td>
                </tr>
                <tr className="rw chkbtn">
                  <td>
                    <button>PlaceOrder</button>
                  </td>
                  <td>
                    <button onClick={() => navigate("/cart")}>
                      BackToCart
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      ) : (
        <div className="checkoutbtn">
          <h1>No item in a cart to place order</h1>
          <button onClick={() => navigate("/")}>Start Shopping</button>
        </div>
      )}
    </div>
  );
};