import React from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from "mdb-react-ui-kit";

export default function InputBox(props) {
  return (
    <div className="input_box">
      <form>
        <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          onSubmit={props.onSubmit}
        />
        <MDBBtn
          className="m-1"
          tag="a"
          color="#95dceb"
          onClick={props.onSubmit}
          type="submit"
        >
          <MDBTooltip title="Add" tag="a">
            <MDBIcon
              fas
              icon="arrow-right"
              style={{ color: "#fffe00" }}
              size="lg"
            />
          </MDBTooltip>
        </MDBBtn>
      </form>
    </div>
  );
};