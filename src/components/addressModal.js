import React, { Component } from "react";
import { connect } from "react-redux"; //뭐하는 친구?
import { Redirect, Link } from "react-router-dom";
import { compose } from "recompose"; // ???
// import PropTypes from 'prop-types'
import classnames from "classnames/bind";
import debug from "debug";

import withHandleInputChange from "../hocs/input/withHandleInputChange";

import { loadAddresses } from "../redux/addresses/actions";
import TextInput from "./TextInput";
import Button from "./Button";

import css from "./AddressModal.scss";

const cx = classnames.bind(css);
const moduleName = "AddressModal";

class AddressModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { address } = this.props.values;

    this.props.loadAddresses(address);
  }

  render() {
    console.log("!!!", this.props);
    const { addresses, values, handleInputChange } = this.props;

    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-Dimmed`)} />
        <div className={cx(`${moduleName}-ModalWrapper`)}>
          <div className={cx(`${moduleName}-ModalBox`)}>
            <div className={cx(`${moduleName}-TextInput-wrapper`)}>
              <form onSubmit={this.handleSubmit}>
                <TextInput
                  name="address"
                  value={values.address || ""}
                  onChange={handleInputChange}
                  placeholder="     주소를 입력하세요"
                  buttonComponent={
                    <Button className={cx(`${moduleName}-search-button`)}>
                      검색
                    </Button>
                  }
                />
              </form>
            </div>
            {/* {조건에 따라 보여주기} */}
            {/* {addresses.data.length !== 0 && (
                <div className={cx(`${moduleName}-addresses`)}>
                <div className={cx(`${moduleName}-address`)}>
                  <p>address</p>
                </div>
              </div>
            )} */}
            <div className={cx(`${moduleName}-addresses`)}>
              {addresses.data.map(address => {
                if (
                  address.breakfastDeliveryAvailable &&
                  !address.lunchDeliveryAvailable
                ) {
                  return (
                    <div
                      className={cx(`${moduleName}-address`)}
                      key={address.lon}
                    >
                      <p>{address.address}</p>
                      <span> 새벽 가능 </span>
                    </div>
                  );
                } else if (
                  address.breakfastDeliveryAvailable &&
                  address.lunchDeliveryAvailable
                ) {
                  return (
                    <div
                      className={cx(`${moduleName}-address`)}
                      key={address.lon}
                    >
                      <p>{address.address}</p>
                      <span> 새벽,점심,저녁 가능 </span>
                    </div>
                  );
                }
                return (
                  <div
                    className={cx(`${moduleName}-address`)}
                    key={address.lon}
                    onClick={() => {
                      alert("배달이 불가능한 지역입니다.");
                    }}
                  >
                    <p>{address.address}</p>
                    <span> 배달 불가 </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(({ addresses }) => ({ addresses }), {
    loadAddresses
  }),
  withHandleInputChange
)(AddressModal);
