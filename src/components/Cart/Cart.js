import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  cartSelector,
} from "../../redux/slices/cartSlice";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
} from "@material-ui/core";

function Cart() {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      {cart.cartItems.length === 0 ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--primarygreen)",
            margin: 10,
          }}
        >
          <Typography variant="h3">Your cart is currently empty!</Typography>
          <Link href="/categories">
            <Typography variant="h4">Start Shopping</Typography>
          </Link>
        </div>
      ) : (
        <div style={{ minHeight: "100vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: 10,
            }}
          >
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "30px 10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "30%",
                    background: "var(--darkblue)",
                    boxShadow: "lightgrey 10px 10px 50px",
                    borderRadius: "10px",
                    height: "80vh",
                  }}
                  key={cartItem.id}
                >
                  <img
                    width="100%"
                    height="50%"
                    src={cartItem.image}
                    alt={cartItem.name}
                  />
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0ea58a",
                      margin: 10,
                      height: "30%",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      align="center"
                      style={{
                        color: "white",
                        width: "100%",
                        height: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textTransform: "uppercase",
                      }}
                    >
                      {cartItem.name}
                    </Typography>
                    {cartItem.price > 10000 ? (
                      <Typography
                        align="center"
                        variant="h5"
                        style={{ color: "white" }}
                      >
                        Price: ₹{cartItem.price}
                      </Typography>
                    ) : (
                      <Typography
                        align="center"
                        variant="h5"
                        style={{ color: "white" }}
                      >
                        Booking Amount: ₹{cartItem.price}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      style={{
                        margin: 5,
                        padding: 5,
                        backgroundColor: "var(--primarygreen)",
                        color: "var(--darkblue)",
                        borderRadius: 10,
                      }}
                      onClick={() => handleAddToCart(cartItem)}
                    >
                      +
                    </Button>
                    <Button
                      size="small"
                      style={{
                        margin: 5,
                        padding: 5,
                        backgroundColor: "var(--primarygreen)",
                        color: "var(--darkblue)",
                        borderRadius: 10,
                      }}
                      onClick={() => handleDecreaseCart(cartItem)}
                    >
                      -
                    </Button>
                    <Button
                      size="small"
                      style={{
                        margin: 5,
                        padding: 5,
                        backgroundColor: "var(--primarygreen)",
                        color: "var(--darkblue)",
                        borderRadius: 10,
                      }}
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h5"
              cstyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#0ea58a",
                margin: 10,
                height: "30%",
              }}
            >
              Total: ${cart.cartTotalAmount}
            </Typography>
            <Link href="/">
              <Typography>Continue Shopping</Typography>
            </Link>
            <Button
              style={{
                margin: 10,
                padding: 8,
                backgroundColor: "var(--primarygreen)",
                color: "var(--darkblue)",
                width: "120px",
                borderRadius: 10,
              }}
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </Button>
            <Button
              style={{
                margin: 10,
                padding: 8,
                backgroundColor: "var(--primarygreen)",
                color: "var(--darkblue)",
                width: "120px",
                borderRadius: 10,
              }}
            >
              Check out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
