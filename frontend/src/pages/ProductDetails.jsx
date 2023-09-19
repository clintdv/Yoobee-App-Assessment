// Anthea's Code

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../utils/ContextProvider";
import Newsletter from "../components/Newsletter";

function ProductDetails() {
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const [question, setQuestion] = useState([]);
  const [query, setQuery] = useState("");
  const { addToCart, myCart } = useGlobalContext();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `http://localhost:4000/proudctslist/${productid}`
      );
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [productid]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  useEffect(() => {
    console.log(myCart);
  }, [myCart]);

  return (
    <div>
      <div className="container mx-auto max-w-7xl my-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-96 h-96"
            />
          </div>

          <div className="flex flex-col justify-top items-left">
            <h2 className="text-3xl font-thin uppercase">{product.title}</h2>
            <p className="text-xl font-light text-[#CA7A7A]">
              ${product.retailPrice}
            </p>

            <button
              className="bg-black text-white px-4 py-2 w-max my-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <div className="flex w-full border-t-[1px] border-[#b7b7b7] md:my-5" />

            <p className="text-[16px] font-thin text-[#303030]">
              Category:{" "}
              <span className="text-[#CA7A7A] underline">
                {" "}
                {product.gender}{" "}
              </span>{" "}
              {product.productType} {product.brand}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-5 ">
          <h2 className="text-2xl text-[#CA7A7A] underline font-thin uppercase">
            Description
          </h2>

          <div className="flex flex-col justify-left items-left pb-10 w-full border-y-[1px] border-[#b7b7b7] md:py-10 md:px-10">
            <p className="text-xl font-thin ">Product Description</p>
            <p className="text-[16px] font-thin text-[#303030]">
              {product.description}
            </p>
            <p className="text-xl font-thin  mt-5">Includes</p>
            <p className="text-[16px] font-thin text-[#303030]">
              Original packaging and invoice
            </p>
            <p className="text-xl font-thin  mt-5">Measurements</p>
            <p className="text-[16px] font-thin text-[#303030]">
              L: 30cm D: 15cm H: 35cm
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:mt-[100px] ">
          <h2 className="text-2xl text-[#CA7A7A] underline font-thin uppercase">
            ASK A QUESTION
          </h2>

          <div className="flex flex-col justify-left items-left w-full border-y-[1px] border-[#b7b7b7] md:py-10 mb-10 md:px-10">
            {question.map((q, key) => (
              <div
                key={key}
                className="flex flex-row justify-left items-left w-full  md:py-2 md:px-10 gap-5"
              >
                <img src="/profile-pic.png" alt="" className="w-10 h-10" />
                <p className="text-[14px] font-thin text-[#303030]">{q}</p>
              </div>
            ))}
            <input
              type="text"
              placeholder="Name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full my-2 border-[#b7b7b7] border-[1px] p-2 min-h-[200px]"
            />
            <div className="flex justify-end items-right w-full">
              <button
                className="bg-black text-white px-4 py-2 w-max my-4 uppercase"
                onClick={() => {
                  setQuestion([...question, query]);
                  setQuery("");
                }}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default ProductDetails;
