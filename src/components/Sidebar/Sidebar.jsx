import { useDispatch, useSelector } from "react-redux";
import "./SidebarStyle.css";
import {
  decrementCartItem,
  incrementCartItem,
  removeCartItem,
} from "../../features/cartSlice/cartSlice";

const Sidebar = () => {
  const store = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();


   const handleButtonClick = (item) => {
     dispatch(incrementCartItem(item));
    //  dispatch(removeCartItem(item));
   };

  return (
    <aside className="sidebar">
      {store.length > 0 ? (
        store?.map((item) => (
          <section key={item.id}>
            <div>
              <h5 className="sidebar_title">{item.title}</h5>
              <div className="image_sidebar">
                <img src={item.image} alt="image" />
              </div>
            </div>
            <h5>{item.price}</h5>
            <div className="sidebar_icon">
              <span onClick={() => handleButtonClick(item)}>
                <svg
                  className="s_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
              <span>{item.quantity}</span>
              <span onClick={() => dispatch(decrementCartItem(item))}>
                <svg
                  className="s_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </section>
        ))
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </aside>
  );
};

export default Sidebar;
