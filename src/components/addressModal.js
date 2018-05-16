import React, { Component } from "react";
import { connect } from "react-redux"; //뭐하는 친구?
import { Redirect, Link } from "react-router-dom";
import { compose } from "recompose"; // ???
// import PropTypes from 'prop-types'
import debug from "debug";

import "./AddressModal.css";

class AddressModal extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="Dimmed" />
        <div className="ModalWrapper">
          <div className="ModalBox">
            <div className="TextInput-wrapper">
              <form>
                <input />
                <button>검색</button>
              </form>
            </div>
            {/* {조건에 따라 보여주기} */}
            <div className="addresses">
              <div className="address">
                <p>address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressModal;
