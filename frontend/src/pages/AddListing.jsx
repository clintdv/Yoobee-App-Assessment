// Clint and Anthea's Code

// Clint

import Options from "../components/Options";
import { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import { toast } from "react-toastify";

function AddListing() {
  const GenderTypes = ["Women", "Men", "Kids"];
  const ProductTypes = ["Fashion", "Bags", "Accessories"];
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [retailPrice, setRetailPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [productType, setProductType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadProduct = async () => {
    const file = selectedFile;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "y939xbhq");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dx0bmar3b/image/upload",

        formData
      );
      addListing(res.data.secure_url);
    } catch (err) {
      console.log(err);
      return;
    }
  };
  const addListing = async (productImage) => {
    const product = {
      imageURL: productImage,
      gender: category,
      productType: productType,
      brand: brand,
      title: title,
      description: description,
      retailPrice: retailPrice,
      sellingPrice: price,
      sellerid: localStorage.getItem("uid"),
    };

    const token = localStorage.getItem("token");

    const response = await axios.post(
      "http://localhost:4000/addproduct",
      product,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (response.status === 200) {
      toast.success("Product added successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-start items-center my-16">
      <h1 className="text-[3rem] font-thin text-black uppercase">My account</h1>
      <div className="flex md:flex-row flex-col justify-top  items-top my-16 gap-10">
        <Options />

        <div className="flex flex-col justify-between  items-center h-max md:max-w-3xl">
          <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
            create a listing
          </h1>

          <div className="flex flex-col justify-center items-center border-2 border-black border-dashed w-full  h-[200px] gap-2">
            <img src="/camera.png" alt="" className="h-[30px] w-[35px]" />
            <p className="text-[14px] font-light text-black uppercase">
              Drag and drop your photos
            </p>
            <p className="text-[14px] font-light text-black uppercase">or</p>

            <input
              type="file"
              name="file"
              className="custom-file-input"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>

          <p className="text-[14px] font-light text-black uppercase mt-10">
            Tip: Please include clear pictures for upload. For a better presented
            product, place onto a white background and make sure the item is
            well lit.
          </p>

          <div className="flex flex-col justify-start items-left w-full md:my-5">
            <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
              choose categories
            </h1>

            <p className="text-[20px] font-light text-black">Gender</p>
            <div className="flex flex-row justify-between items-center w-full md:my-5">
              {GenderTypes.map((item, key) => (
                <button
                  key={key}
                  onClick={() => setCategory(item)}
                  className={` px-4 py-2 mt-4 md:w-[200px] uppercase w-max border-[1px] border-black hover:cursor-pointer 
                    ${
                      category === item
                        ? "bg-black text-white hover:bg-gray-100 hover:text-black"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-[20px] font-light text-black">Product</p>
            <div className="flex flex-row justify-between items-center w-full md:my-5">
              {ProductTypes.map((item, key) => (
                <button
                  key={key}
                  onClick={() => setProductType(item)}
                  className={` px-4 py-2 mt-4 md:w-[200px] uppercase w-max border-[1px] border-black hover:cursor-pointer 
                    ${
                      productType === item
                        ? "bg-black text-white hover:bg-gray-100 hover:text-black"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <h1 className="text-[2rem] font-thin text-black uppercase md:my-5">
              Product Description
            </h1>

            <div className="flex flex-col justify-start items-left w-full">
              <div className="flex  items-center gap-5">
                <p className="text-base font-light text-black md:w-[130px]">
                  Brand
                </p>
                <div className=" w-full">
                  <InputField
                    type="text"
                    placeholder="Brand/Designer"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex  items-center gap-5">
                <p className="text-base font-light text-black md:w-[130px]">
                  Title
                </p>
                <div className=" w-full">
                  <InputField
                    type="text"
                    placeholder="Eg. Monogram Neverful Tote Bag"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex  items-center gap-5">
                <p className="text-base font-light text-black whitespace-nowrap">
                  Full Description
                </p>
                <div className=" w-full">
                  <InputField
                    type="text"
                    placeholder="Include full description explaining materials, year of manufacture, measurements and the condition of the item"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex  items-center gap-5">
                  <p className="text-base font-light text-black md:w-[170px] whitespace-nowrap">
                    Retail Price
                  </p>
                  <div className=" w-full">
                    <InputField
                      type="text"
                      placeholder="(NZD)"
                      value={retailPrice}
                      onChange={(e) => setRetailPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex  items-center gap-5">
                  <p className="text-base font-light text-black whitespace-nowrap">
                    Selling Price
                  </p>
                  <div className=" w-full">
                    <InputField
                      type="text"
                      placeholder="NZD)"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center w-full">
            <button
              className="bg-black text-white px-4 py-2 mt-4 uppercase w-max"
              onClick={uploadProduct}
            >
              create listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
