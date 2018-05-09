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

    fetch('https://apialpha.plating.co.kr/canteen/v3/company', {
        method: 'POST',
        body: data,
    })
    .then((res)=> {
        console.log(res);
        if(res.ok){
            console.log('fetch data success!')
        } else {
            console.log('fetch fail... OTL');
        }
    })
    .catch((err)=>{
        console.log('acquire err !!!!' + err.message);
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
