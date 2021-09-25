import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./AllUsers.css";

const AllUsers = (props) => {
  const { name, phone, email, location, gender, picture } = props.user || {};

  return (
    <div className="col-md-4">
      <div className="cart">
        <div className="user-image">
          <img src={picture.large} alt="" />
        </div>
        <h6>Name: {name.first}</h6>
        <h6>Phone: {phone}</h6>
        <h6>Email: {email}</h6>
        <h6>City: {location.city}</h6>
        <h6>Country:{location.country}</h6>
        <h6>Gender: {gender}</h6>

        {props.user.isAdded ? (
          <button className="btn btn-danger mb-3">Already Added</button>
        ) : (
          <button
            onClick={() => props.handleAddToCart(props.user)}
            className="btn btn-info mb-3"
          >
            Add to group
          </button>
        )}

        <ReactModal userDetails={props.user}></ReactModal>
      </div>
    </div>
  );
};

export default AllUsers;