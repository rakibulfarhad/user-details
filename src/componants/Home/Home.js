import React, { useEffect } from "react";
import { useState } from "react";
import AllUsers from "../AllUsers/AllUsers";
import CartUsers from "../CartUsers/CartUsers";
import ReactModal from "../ReactModal/ReactModal";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [guider, setGuider] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);
  useEffect(() => {
    fetch("./guider.JSON")
      .then((res) => res.json())
      .then((data) => setGuider(data));
  }, []);

  const [cart, setCart] = useState([]);

  const totalMale = cart.filter((pd) => pd.name.title == "Mr");

  const totalFemale = cart.length - totalMale.length;

  const cartReducer = (prev, current) => prev + current;
  const price = cart.reduce(cartReducer, 0);

  const handleAddToCart = (user) => {
    user.isAdded = true;
    const newAddedUser = [...cart, user];
    setCart(newAddedUser);
  };

  return (
    <div>
      <div className="container">
        <div className="members-cart">
          <h1 className="text-danger">Total Member: {cart.length}</h1>
          <h2>Total Male: {totalMale.length}</h2>
          <h2>Total Female: {totalFemale || 0}</h2>
          {cart.map((pd) => (
            <CartUsers user={pd}></CartUsers>
          ))}
        </div>
        <div className="row">
          <div className="col-md-9 left-side">
            <div className="row">
              {data.map((user) => (
                <AllUsers
                  handleAddToCart={handleAddToCart}
                  key={user.id.value}
                  user={user}
                ></AllUsers>
              ))}
            </div>
          </div>
          <div className="col-md-3 right-side">
            <h3 className="text-danger">our guiders row</h3>
            <div className="row">
              {guider.map((user) => (
                <div className="col-md-12">
                  <div className="cart">
                    <div className="user-image">
                      <img src={user.picture.large} alt="" />
                    </div>
                    <h6>Name: {user.name.first}</h6>
                    <h4>Role: {user.role}</h4>
                    <h6>Phone: {user.phone}</h6>
                    <h6>Email: {user.email}</h6>
                    <h6>City: {user.location.city}</h6>
                    <h6>Country:{user.location.country}</h6>
                    <h6>Gender: {user.gender}</h6>
                    <button
                      onClick={() => handleAddToCart(user)}
                      className="btn btn-info mb-3"
                    >
                      Add to group
                    </button>
                    <ReactModal userDetails={user}></ReactModal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;