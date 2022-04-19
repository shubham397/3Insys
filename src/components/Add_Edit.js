import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import mockData from "../helpers/mockData";

const Add_Edit = (props) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(mockData.filter((data) => data.id === props.editIndex));
  }, [props.editIndex]);

  useEffect(() => {
    setOpen(props.showEdit);
  }, [props.showEdit]);

  const AddProduct = () => {
    return (
      <div style={{ width: "75%", marginLeft: "15%" }}>
        <h3>Add New T-Shirt</h3>
        <form onSubmit={props.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <select defaultValue="Select Size" id="size" className="form-control">
                <option disabled>
                  Select Size
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Color"
              />
            </div>
            <div className="form-group">
              <label htmlFor="made">Made</label>
              <input
                type="text"
                className="form-control"
                id="made"
                placeholder="Made"
              />
            </div>
            <div className="form-group">
              <label htmlFor="style">Style</label>
              <select defaultValue="Select Style" id="style" className="form-control">
                <option disabled>
                  Select Style
                </option>
                <option value="Full">Full</option>
                <option value="Half">Half</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select defaultValue="Select Gender" id="gender" className="form-control">
                <option disabled>
                  Select Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Select Image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="des">Description</label>
              <input
                type="text"
                className="form-control"
                id="des"
                placeholder="Description"
              />
            </div>
          </div>
          <br />
          <button
            style={{ marginRight: "20px" }}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
          <input type="button" onClick={props.onCloseModal} className="btn btn-danger" value="Cancel" />
        </form>
      </div>
    );
  };

  const EditProduct = () => {
    return (
      <div style={{ width: "75%", marginLeft: "15%" }}>
        <h3>Edit a T-Shirt</h3>
        <form onSubmit={props.handleEditSubmit}>
          {data.map((d, index) => {
            return (
              <div className="form-row" key={index}>
                <div className="form-group">
                  <label htmlFor="size">Size</label>
                  <select defaultValue={d.size} id="size" className="form-control">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="Price"
                    defaultValue={d.price}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    placeholder="Color"
                    defaultValue={d.colour}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="made">Made</label>
                  <input
                    type="text"
                    className="form-control"
                    id="made"
                    placeholder="Made"
                    defaultValue={d.made}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="style">Style</label>
                  <select defaultValue={d.style} id="style" className="form-control">
                    <option value="Full">Full</option>
                    <option value="Half">Half</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select defaultValue={d.gender} id="gender" className="form-control">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="Select Image"
                    defaultValue={d.image}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="des">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="des"
                    placeholder="Description"
                    defaultValue={d.description}
                  />
                </div>
              </div>
            );
          })}
          <br />
          <button
            style={{ marginRight: "20px" }}
            type="submit"
            className="btn btn-primary"
          >
            Edit
          </button>
          <input type="button" onClick={props.onCloseModal} className="btn btn-danger" value="Cancel" />
        </form>
      </div>
    );
  };

  return (
    <div>
      <Modal open={open} onClose={props.onCloseModal} center>
        {data.length > 0 ? <EditProduct /> : <AddProduct />}
      </Modal>
    </div>
  );
};

export default Add_Edit;
