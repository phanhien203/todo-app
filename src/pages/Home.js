import React, { useEffect, useState } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataList,
  deleteTodoItem,
  createTodoItem,
  updateTodoItem
} from "../redux/actions";
import { toast } from "react-toastify";
import Item from "../component/layout/Item";
import InputBox from "../component/layout/Input";

export default function Home() {
  const { todoList, loading } = useSelector((state) => state.data);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataList());
  }, []);

  useEffect(() => {
    if (loading) {
      return (
        <MDBSpinner style={{ marginTop: "150px" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      );
    }
  }, [loading]);


  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you wanted to delete?")) {
      dispatch(deleteTodoItem(id));
      toast.success("Delete Successfully");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      description: "",
      isComplete: false,
      title: value,
      userID: 1
    }
    dispatch(createTodoItem(data));
    setValue('')
  }

  const handleComplete = (id, isComplete) => {
    const data = {
      id: id,
      data: {
        isComplete: !isComplete
      }
    }
    dispatch(updateTodoItem(data));
  }

  return (
    <div className="home-page">
      <section>
        <h1>
          WORK TO-DOS
        </h1>
        <h4 className="user_manual1">Tick the check-box to mark it as complete</h4>
        <p className="user_manual2">Click the item to edit it</p>
      </section>
      <div className="container">
        <InputBox
          value={value}
          handleChange={(e) => setValue(e.target.value)}
          onSubmit={handleSubmit}
          placeholder="New todo ..."
        />
        <div className="items">
          { (todoList) && todoList?.map((item, index) => {
            if (item?.title.toUpperCase().indexOf(value.toUpperCase()) > -1) {
              return (
                <Item
                  item={item}
                  index={index}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};