// Anthea's Code

import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      key={product._id}
      className="flex flex-col items-center md:my-5 hover:border-[#CFCFCF] 
    hover:border-2 hover:cursor-pointer border-2 border-transparent"
      onClick={() => navigate(`/shop/${product._id}`)}
    >
      <img
        src={product.imageURL}
        alt={product.name}
        className=" h-[400px] object-cover"
      />
      <div className="flex flex-col  items-left">
        <p className=" uppercase">{product.title}</p>
        <p className="text-[#CA7A7A]">${product.sellingPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
