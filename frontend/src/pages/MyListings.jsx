import { useState, useEffect } from "react";
import axios from "axios";
import Options from "../components/Options";
import EditModal from "../components/EditModal";

function MyListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    axios
      .get(`http://localhost:4000/productslist/seller/${uid}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setLoading(false);
        setListings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  const DeleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    axios.delete(`http://localhost:4000/deleteproduct/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setListings(listings.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-start items-center my-16">
      <div className="flex lg:flex-row flex-col justify-top  items-top my-16 gap-10 max-w-6xl">
        <Options />
        <EditModal
          showModal={showModal}
          setShowModal={setShowModal}
          product={product}
        />
        <div className="grid grid-cols-12 gap-4">
          <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
            Listings
          </h1>

          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          <div className="grid grid-cols-12 col-span-12 my-5">
            <div className="md:text-[18px] uppercase md:col-span-6 col-span-4">
              Product{" "}
            </div>
            <div className="md:text-[18px] uppercase col-span-2">
              Unit Price
            </div>
            <div className="md:text-[18px] uppercase col-span-2 px-3 hidden md:block">
              Edit
            </div>
            <div className="md:text-[18px] uppercase col-span-2 px-3  hidden md:block">
              delete
            </div>
          </div>

          {listings &&
            listings.map((item, index) => (
              <div className="col-span-12 md:col-span-12 my-5" key={index}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 md:col-span-3">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-3">
                    <p className="md:text-[18px] font-thin">{item.title}</p>
                  </div>
                  <div className="col-span-3 md:col-span-2">
                    <h2 className="md:text-[18px]">{item.name}</h2>
                    <p className="md:text-[18px] text-[#CA7A7A]">
                      $ {item.sellingPrice}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-2">
                    <button
                      className="bg-white text-black px-4 py-2 border-black border-[1px]"
                      onClick={() => {
                        setProduct(item);
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="col-span-1 md:col-span-1">
                    <button
                      className="bg-white text-black px-4 py-2 border-black border-[1px]"
                      onClick={() => DeleteProduct(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyListings;
