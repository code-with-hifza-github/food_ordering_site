import React, { useState } from "react";
import "./AddItem.css";
import assets from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { response } from "express";

const AddItem = () => {
  const url = "http://localhost:5000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

 
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(); 
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({ 
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false)
        toast.success(response.data.message) 
      }
    } catch (error) {
      toast.error(response.data.message)
      console.error("Error while adding item:", error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="img">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="img"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-desc flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="Add Description Here"
            required
            rows="7"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Cake">Cake</option>
              <option value="Desert">Deserts</option>
              <option value="Rolls">Rolls</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Noodles">Noodles</option>
              <option value="Pasta">Pasta</option>
              <option value="Pure Veg">Pure Veg</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$10"
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
