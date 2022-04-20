import React, { useEffect, useState } from "react";
import "../Styles/Card.css";
import Add_Edit from "./Add_Edit";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

const Card = (props) => {
  const [datas, setDatas] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState();

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
    setModalDeleteShow(false)
  };

  const handleAddBtn = () => {
    setEditIndex(false);
    setShowEdit(true);
  };

  function handleRedirect(id) {
    props.history.push(`/description/${id}`);
    window.location.reload();
  }

  function DeleteModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger btn-block" onClick={props.onHide}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleDeleteBtn(deleteIndex);

              // deleteOneContact(contactId);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
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
                    setModalDeleteShow(true)
                    setDeleteIndex(data.id)
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
      <DeleteModal
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
      />
    </div>
  );
};
export default Card;
