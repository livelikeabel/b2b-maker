import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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

    //fetch('https://apialpha.plating.co.kr/canteen/v3/company', {
    fetch("http://localhost:25056/canteen/v3/company", {
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
      .then((data)=>{
          if(data) {
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

  render() {
    return (
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
          <input
            id="address"
            name="address"
            type="text"
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
    );
  }
}

export default Form;
