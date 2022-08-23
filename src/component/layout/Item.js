import React from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Item(props) {
  const item = props.item;
  const formatDate = (day) => {
    return moment(day).format('DD-MM-YYYY hh:mm')
  }

  return (
    <div className="item" >
      <div key={item?.title}
        className="text"
        style={{ textDecoration: item.isComplete ? 'line-through black' : "none" }}
        title={item?.time}
      >
        <input
          type="checkbox"
          id={item.id}
          checked={item?.isComplete}
          onClick={() => { props.handleComplete(item?.id, item?.isComplete) }}
        />
        <Link
          to={`/todo/${item?.id}`}
          style={{ color: "#fff" }}>
          <li id={item?.id}>
            <p>{item?.title}</p>
            <div>{formatDate(item?.updatedAt)}</div>
          </li>
        </Link>
      </div>
      <MDBBtn
        className="m-1"
        tag="a"
        color="none"
        onClick={() => props.handleDelete(item?.id)}
      >
        <MDBTooltip title="Delete" tag="a">
          <MDBIcon
            fas
            icon="trash"
            style={{ color: "#dd4b39" }}
            size="md"
          />
        </MDBTooltip>
      </MDBBtn>
      <Link to={`/todo/${item?.id}`}>
        <MDBTooltip title="Edit" tag="none">
          <MDBIcon
            fas
            icon="pen"
            style={{ color: "#002542", marginLeft: "10px" }}
            size="md"
          />
        </MDBTooltip>
      </Link>
    </div>
  );
};
