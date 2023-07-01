import "./MainStyle.css"
const Submain = ({ product, handleAddToCart }) => {
  return (
    <>
      <div className="Items_container">
        <div className="left">
          <h3 className="product_title">{product.title}</h3>
          <img className="product_image" src={product.image} alt="image" />
          <span className="price">Price : {product.price}</span>
        </div>

        <div className="right">
          <div className="inc_dec_container">
            <button onClick={() => handleAddToCart(product)}>Add To cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submain