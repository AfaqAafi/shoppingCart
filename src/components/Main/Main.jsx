import { useDispatch, useSelector } from 'react-redux';
import './MainStyle.css'
import { useEffect } from 'react';
import { addItemToCart, fetchUser } from '../../features/cartSlice/cartSlice';
import Submain from './Submain';
const Main = () => {
  const products = useSelector(state => state.product.products)
  const loading = useSelector(state => state.product.isLoading)
  const isError = useSelector((state) => state.product.error);
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchUser())
  }, [dispatch])


  const handleAddToCart = (pId) => { 
    dispatch(addItemToCart(pId))
  }


  if (loading) {
    return <div>
      <h3>Loading.....</h3>
    </div>
  }
  if (isError) {
    return <div>
      <h3>Error.....</h3>
    </div>
  }
    return (
      <main>
        <h3>YOUR BAG!</h3>
        {products.map((product) => (
          <Submain
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}

        <div className="border_bottom"></div>
        <div className="cart_total">
          <h2>Total</h2>
          <span> 300 usd </span>
        </div>
        <button className="clear_Items">Clear items</button>
      </main>
    );
}

export default Main