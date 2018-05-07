import React from 'react';
import Form from './Form';
import './InputListTemplate.css';

const InputListTemplate = () => {
    return (
        <main className="input-list-template">
            <div className="title">
            B2B Maker
            </div>
            <section className="form-wrapper">
                <Form/>
            </section>
        </main>
    );
};

export default InputListTemplate;