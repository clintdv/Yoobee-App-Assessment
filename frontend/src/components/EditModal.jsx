import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
function EditModal({ showModal, setShowModal, product }) {
  const [editedproduct, setProduct] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...editedproduct, [name]: value });
  };

  const handleSubmit = (_id) => {
    const token = localStorage.getItem("token");
    if (selectedFile) {
      const file = selectedFile;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "y939xbhq");
      try {
        axios
          .post(
            "https://api.cloudinary.com/v1_1/dx0bmar3b/image/upload",
            formData
          )
          .then((response) => {
            // setProduct({
            //   ...editedproduct,
            //   imageURL: response.data.secure_url,
            // });
            axios.put(
                `http://localhost:4000/updateproduct/${_id}`,
                {
                    ...editedproduct,
                    imageURL: response.data.secure_url,
                },
                {
                    headers: {
                    Authorization: token,
                    },
                }
                );

          });
          toast.success("Product Updated Successfully");
          setShowModal(false);
      } catch (err) {
        console.log(err);
        return;
      }
    }
    else{
    
    
    axios
      .put(`http://localhost:4000/updateproduct/${_id}`, editedproduct, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setShowModal(false);
        toast.success("Product Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in updating product");
      });
    }
  };

  useEffect(() => {
    setProduct(product);
  }, [product]);

  return (
    <div
      className={`${
        showModal ? "" : "hidden"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-900 opacity-75"
            onClick={() => setShowModal(false)}
          />
        </div>

        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label className="font-medium text-gray-800">Name</label>
            <input
              type="text"
              defaultValue={product.title}
              name="title"
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              onChange={handleInputChange}
            />
            <label className="font-medium text-gray-800">Description</label>
            <textarea
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              defaultValue={product.description}
              name="description"
              onChange={handleInputChange}
            />

            <label className="font-medium text-gray-800">Brand</label>
            <input
              type="text"
              defaultValue={product.brand}
              onChange={handleInputChange}
              name="brand"
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />

            <label className="font-medium text-gray-800">Gender</label>
            <input
              type="text"
              defaultValue={product.gender}
              onChange={handleInputChange}
              name="gender"
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />

            <label className="font-medium text-gray-800">Product Type</label>
            <input
              type="text"
              defaultValue={product.productType}
              name="productType"
              onChange={handleInputChange}
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />

            <label className="font-medium text-gray-800">Selling Price</label>
            <input
              type="number"
              onChange={handleInputChange}
              defaultValue={product.sellingPrice}
              name="sellingPrice"
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />

            <label className="font-medium text-gray-800">Retail Price</label>
            <input
              type="number"
              defaultValue={product.retailPrice}
              name="retailPrice"
              onChange={handleInputChange}
              className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
            />
          </div>
          <label className="font-medium text-gray-800 ml-5">Image</label>
          <img
            src={editedproduct.imageURL}
            alt={product.title}
            className="w-max h-[200px] object-cover mx-auto"
          />
          <input
            type="file"
            name="file"
            className="custom-file-input mx-auto mt-2"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button
              type="button"
              className="bg-white text-black px-4 py-2 border-black border-[1px] mx-2"
              onClick={() => setShowModal(false)}
            >
              <i className="fas fa-times"></i> Cancel
            </button>
            <button
              type="button"
              className=" bg-white text-black px-4 py-2 border-black border-[1px]"
              onClick={() => handleSubmit(product._id)}
            >
              <i className="fas fa-plus"></i> Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
EditModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};
