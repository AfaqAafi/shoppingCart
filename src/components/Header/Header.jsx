import { useDispatch, useSelector } from 'react-redux';
import './headerStyle.css'
import Sidebar from '../Sidebar/Sidebar';
import { sidebartoggle } from '../../features/cartSlice/cartSlice';
import { useCallback } from 'react';

const Header = () => {  
  const quantityProduct = useSelector(state => state.product.cart)
  const toggleSidebar = useSelector((state) => state.product.toggleSidebar);

  const quantity = quantityProduct.reduce(
    (acu, product) => acu + product.quantity,
    0
  );
  const dispatch = useDispatch()

  const toggleIcon = useCallback(() => {
    dispatch(sidebartoggle())
  }, [dispatch])


  return (
    <>
      <header className="header">
        <h3 className="logo">Redux Toolkit</h3>
        <div className="cart_icon" onClick={toggleIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>{quantity}</span>
        </div>
      </header>
      {toggleSidebar && <Sidebar />} 
      </>
  );
}

export default Header