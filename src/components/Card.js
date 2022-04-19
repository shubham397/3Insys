import React, { useEffect, useState } from "react";
import "../Styles/Card.css";
import Add_Edit from "./Add_Edit";
import mockData from "../helpers/mockData";

const Card = (props) => {
  const [datas, setDatas] = useState(mockData);
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  useEffect(() => {}, []);

  const onCloseModal = () => setShowEdit(false);

  const handleEditBtn = (id) => {
    setEditIndex(id);
    setShowEdit(true);
  };

  const handleDeleteBtn = (id) => {
    setDatas(datas.filter((data) => data.id !== id));
  };

  const handleAddBtn = () => {
    setEditIndex();
    setShowEdit(true);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    let newProduct = {
      id: datas.length + 1,
      size: event.target[0].value,
      price: event.target[1].value,
      colour: event.target[2].value,
      made: event.target[3].value,
      style: event.target[4].value,
      gender: event.target[5].value,
      image:event.target[6].value,
      description: event.target[7].value,
    };
    datas.push(newProduct);
    alert("product Added successfully")
    onCloseModal();
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    let editProducts = datas.map((data, index)=>{
        if(data.id === editIndex){
            let newProduct = {
                id: data.id,
                size: event.target[0].value,
                price: event.target[1].value,
                colour: event.target[2].value,
                made: event.target[3].value,
                style: event.target[4].value,
                gender: event.target[5].value,
                image:event.target[6].value,
                description: event.target[7].value,
              };
            return newProduct;
        }
        else{
            return data;
        }
    })
    setDatas(editProducts);
    alert("product Edited successfully")
    onCloseModal();
  };

  return (
    <div className="card-container">
      <Add_Edit
        handleSubmit={handleAddSubmit}
        handleEditSubmit={handleEditSubmit}
        onCloseModal={onCloseModal}
        showEdit={showEdit}
        editIndex={editIndex}
      />
      {datas.map((data, index) => {
        return (
          <div className="card" key={index}>
            <div className="edit-delete-btn">
              <div>
                <img
                  onClick={() => {
                    handleDeleteBtn(data.id);
                  }}
                  src="/trash.png"
                  width="35px"
                  height="35px"
                />
              </div>
              <div>
                <img
                  onClick={() => {
                    handleEditBtn(data.id);
                  }}
                  src="/pencil.png"
                  width="35px"
                  height="35px"
                />
              </div>
            </div>
            <div className="card-image">
              <img src={data.image} width="100px" height="100px" />
            </div>
            <div className="card-details">
              <div className="card-subDetails">{data.size}</div>
              <div className="card-subDetails">${data.price}</div>
              <div className="card-subDetails">{data.gender}</div>
            </div>
          </div>
        );
      })}
      <div className="card">
        <div className="card-image-1">
          <img
            src="/plus.png"
            onClick={() => {
              handleAddBtn();
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
