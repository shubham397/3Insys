import React, { useEffect, useState } from "react";
import "../Styles/Card.css";
import Add_Edit from "./Add_Edit";

const Card = (props) => {
  const [datas, setDatas] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  useEffect(() => {
    let mockData = JSON.parse(localStorage.getItem("mockData"));
    setDatas(mockData);
  }, []);

  const onCloseModal = () => {
    let mockData = JSON.parse(localStorage.getItem("mockData"));
    setDatas(mockData);
    setShowEdit(false);
  };

  const handleEditBtn = (id) => {
    setEditIndex(id);
    setShowEdit(true);
  };

  const handleDeleteBtn = (id) => {
    let newData = datas.filter((data) => data.id !== id);
    localStorage.setItem("mockData", JSON.stringify(newData));
    setDatas(newData);
  };

  const handleAddBtn = () => {
    setEditIndex(false);
    setShowEdit(true);
  };

  function handleRedirect(id) {
    props.history.push(`/description/${id}`);
    window.location.reload();
  }

  return (
    <div className="card-container">
      <Add_Edit
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
              <img
                onClick={() => {
                  handleRedirect(data.id);
                }}
                src={data.image}
                width="100px"
                height="100px"
              />
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
