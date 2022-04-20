import React, { useEffect, useState } from "react";
import "../Styles/Description.css";
import Add_Edit from "./Add_Edit";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

const Description = (props) => {
  const [data, setData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState();

  useEffect(() => {
    let id = window.location.href.split("/")[4];
    let mockData = JSON.parse(localStorage.getItem("mockData"));
    setData(mockData.filter((data) => data.id == id));
  }, []);

  const handleEditBtn = (id) => {
    setEditIndex(id);
    setShowEdit(true);
  };

  const handleDeleteBtn = (id) => {
    let mockData = JSON.parse(localStorage.getItem("mockData"));
    let newData = mockData.filter((data) => data.id !== id);
    localStorage.setItem("mockData", JSON.stringify(newData));
    setData(newData);
    setModalDeleteShow(false)
    props.history.push(`/`);
    window.location.reload();
  };

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

  const onCloseModal = () => {
    let mockData = JSON.parse(localStorage.getItem("mockData"));
    setData(mockData);
    setShowEdit(false);
  };

  return (
    <div className="des-card">
      <Add_Edit
        onCloseModal={onCloseModal}
        showEdit={showEdit}
        editIndex={editIndex}
      />
      <div className="des-header">
        <h4>Description</h4>
        <div className="edit-delete">
          <div>
            <img
              onClick={() => {
                setModalDeleteShow(true)
                setDeleteIndex(data[0]?.id)
              }}
              src="/trash.png"
              width="35px"
              height="35px"
            />
          </div>
          <div>
            <img
              onClick={() => {
                handleEditBtn(data[0]?.id);
              }}
              src="/pencil.png"
              width="35px"
              height="35px"
            />
          </div>
        </div>
      </div>
      <div className="des-main">
        <img className="des-image" src={data[0]?.image}></img>
        <div className="des-details">
          <div className="label-div">
            <label>Price</label>
            <label>{data[0]?.price}</label>
          </div>
          <div className="label-div">
            <label>Size</label>
            <label>{data[0]?.size}</label>
          </div>
          <div className="label-div">
            <label>Color</label>
            <label>{data[0]?.colour}</label>
          </div>
          <div className="label-div">
            <label>Made</label>
            <label>{data[0]?.made}</label>
          </div>
          <div className="label-div">
            <label>Style</label>
            <label>{data[0]?.style}</label>
          </div>
          <div className="label-div">
            <label>Gender</label>
            <label>{data[0]?.gender}</label>
          </div>
        </div>
      </div>
      <div className="des-des">{data[0]?.description}</div>
      <DeleteModal
        show={modalDeleteShow}
        onHide={() => setModalDeleteShow(false)}
      />
    </div>
  );
};
export default Description;
