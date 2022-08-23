import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { createTodoItem, updateTodoItem, getDataItem } from "../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  title: '',
  description: '',
  isComplete: false,
  updatedAt: '',
  userID: 1
};

export default function AddEditTodo() {
  const [item, setItem] = useState(initialState);
  const { todoItem } = useSelector((state) => state.data);
  const { description, isComplete, title, userID, updatedAt } = item;
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      dispatch(getDataItem(id));
      setItem({ ...todoItem });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      setItem({ ...todoItem });
    }
  }, [todoItem]);

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      description: item?.description,
      isComplete: item?.isComplete,
      title: item?.title,
      userID: item?.userID
    }

    if (description && title) {
      if (!editMode) {
        dispatch(createTodoItem(data));
        toast.success(" Added Successfully");
        setTimeout(() => history.push("/"), 500);
      } else {
        dispatch(updateTodoItem({ id, data }));
        setEditMode(false);
        toast.success("Updated Successfully");
        setTimeout(() => history.push("/"), 500);
      }
    }
  };
  return (
    <MDBValidation
      className="g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {editMode ? "Update Todo Detail" : "Add Todo Detail"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={title || ""}
          name="title"
          type="text"
          onChange={onChange}
          required
          label="Title"
          validation="*Please provide title todo."
          invalid
        />
        <br />
        <MDBInput
          value={description || ""}
          name="description"
          onChange={onChange}
          label="Description"
          type="text"
          invalid
        />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {editMode ? "Update" : "Add"}
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};