import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="myInput">
        <span>Name</span> <input type="text" placeholder="플레이팅" />
      </div>
      <div className="myInput">
        <span>URL</span> <input type="text" placeholder="plating" />
      </div>
      <div className="myInput">
        <span>Address</span>
        <input type="text" placeholder="서울 강남구 논현동 122-8" />
      </div>
      <div className="myInput">
        <span>Detail</span>
        <input type="text" placeholder="동화히스토리 B1" />
      </div>
      <div className="create-button">추가</div>
    </div>
  );
};

export default Form;
