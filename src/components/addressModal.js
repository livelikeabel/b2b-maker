import React, { Component } from "react";
import { connect } from "react-redux"; //뭐하는 친구?
import { Redirect, Link } from "react-router-dom";
import { compose } from "recompose"; // ???
// import PropTypes from 'prop-types'
import classnames from "classnames/bind";
import debug from "debug";

import TextInput from './TextInput';
// import Button from './Button'

import css from "./AddressModal.scss";

const cx = classnames.bind(css);
const moduleName = "AddressModal";

class AddressModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit() {
    alert("hello");
  }

  handleInputChange() {
      alert('handleInputChange!');
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-Dimmed`)} />
        <div className={cx(`${moduleName}-ModalWrapper`)}>
          <div className={cx(`${moduleName}-ModalBox`)}>
            <div className={cx(`${moduleName}-TextInput-wrapper`)}>
              <form onSubmit={this.handleSubmit}>
                <TextInput
                  name="address"
                //   value={values.address || ""}
                  value={'it is value'}
                  onChange={this.handleInputChange}
                  placeholder="     주소를 입력하세요"
                  buttonComponent={
                      <div />
                    // <Button className={cx(`${moduleName}-search-button`)}>
                    //   검색
                    // </Button>
                  }
                />
              </form>
            </div>
            {/* {조건에 따라 보여주기} */}
            <div className={cx(`${moduleName}-addresses`)}>
              <div className={cx(`${moduleName}-address`)}>
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
