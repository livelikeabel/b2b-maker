import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose'; //앤 또 뭐지....

import "./Form.css";
import AddressModal from './AddressModal';

import { setPopupTrue, setPopupFalse } from '../redux/form/actions'

class Form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(`${process.env.REACT_APP_PLATING_API_URL}/canteen/v3/company`);

    event.preventDefault();
    const data = new FormData(event.target);

    const inputsArr = [];
    for (var value of data.values()) {
      inputsArr.push(value);
    }
    const inputsObject = {
      name: inputsArr[0],
      url: inputsArr[1],
      address: inputsArr[2],
      detail: inputsArr[3]
    };

    // api local연결시.
    // fetch("http://localhost:25056/canteen/v3/company", {
    fetch(`${process.env.REACT_APP_PLATING_API_URL}/canteen/v3/company`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputsObject)
    })
      .then(res => {
        if (res.ok) {
          console.log("fetch data success!");
          return res.json();
        } else {
          console.log("fetch fail... OTL");
        }
      })
      .then(data => {
        if (data) {
          const { newUrl } = data;
          console.log(newUrl);
          alert(`             아래 주소를 통해 새로 생긴 페이지를 확인하세요
            https://canteen.plating.co.kr/${newUrl}`);
        }
      })
      .catch(err => {
        console.log("acquire err !!!!" + err.message);
      });
  }

  prompt() {
    const address = prompt("hi")
    console.log(address);
  }

  render() {
    let popup = null;
    const popupAvailable = this.props.showPopup;
    if(popupAvailable) {
      popup = <AddressModal />;
    } else {
      popup = <div />;
    }


    return (
      <div>
        {popup}
        {/* <form className="form" onSubmit={this.props.setPopupTrue({ showPopup: true })}> */}
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="myInput">
            <span>Name</span>
            <input id="name" name="name" type="text" placeholder="플레이팅" />
          </div>
          <div className="myInput">
            <span>URL</span>
            <input id="url" name="url" type="text" placeholder="plating" />
          </div>
          <div className="myInput">
            <span>Address</span>
            <div className="fakeInput-wrapper" onClick={() => this.props.setPopupTrue({showPopup: true})}>
              <div className="fakeInput">{this.props.value}</div>
            </div>
              <input
                id="address"
                name="address"
                type="hidden"
                value={this.props.value}
                placeholder="서울 강남구 논현동 122-8"
              />
          </div>
          <div className="myInput">
            <span>Detail</span>
            <input
              id="detail"
              name="detail"
              type="text"
              placeholder="동화히스토리 B1"
            />
          </div>
          <div className="button">
            <button>추가</button>
          </div>
        </form>
      </div>
    );
  }
}

// //props 값으로 넣어 줄 상태를 정의한다.
// const mapStateToProps = (state) => ({

// });
// //props 값으로 넣어 줄 액션
// const mapDispatchToProps = (dispatch) => ({
//   setPopupTrue : () => dispatch(setPopupTrue()),
//   setPopupFalse
// });

export default compose(
  connect(
    (state) => ({
      value: state.form.value,
      showPopup: state.form.showPopup,
    }),
    {
      setPopupTrue,
      setPopupFalse,
    }
  )
)(Form);

