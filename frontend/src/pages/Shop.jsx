import Banner from "../components/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:4000/productslist");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Banner title="Shop" backgroundimg="shop-banner.png" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 md:mx-20">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>

        <Newsletter />
    </div>
  );
}

export default Shop;
