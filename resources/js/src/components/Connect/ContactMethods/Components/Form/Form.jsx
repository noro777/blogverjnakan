import React from 'react';
import { connect } from 'react-redux';
import { getColor } from '../../../../../store/reselect/theme-reselect';
import { setColorModeAC } from '../../../../../store/theme-color';

import './Form.css';

const Form = (props) => {
    return (
        <div>
        {props.colorMode
        ?
        <form method="post">
        <section className="form">
            <div className="formInfo">
                <div className="formInputFiled filedBlack">
                    <input type="text" name="fullName" id="fullName" placeholder="Անուն Ազգանուն" />
                </div>
                <div className="formInputFiled filedBlack">
                    <input type="email" name="email" id="email" placeholder="Էլ-փոստ" />
                </div>
            </div>
            <div className="formMessage">
                <div className="formTextFiled filedBlack">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Հաղորդագրություն"></textarea>
                </div>
                <input type="submit" value="Ուղարկել" name="submit" id="submit" className="formSubmit" />
            </div>
        </section>
    </form>
        :
        <form method="post">
        <section className="form">
            <div className="formInfo">
                <div className="formInputFiled filed">
                    <input type="text" name="fullName" id="fullName" placeholder="Անուն Ազգանուն" />
                </div>
                <div className="formInputFiled filed">
                    <input type="email" name="email" id="email" placeholder="Էլ-փոստ" />
                </div>
            </div>
            <div className="formMessage">
                <div className="formTextFiled filed">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Հաղորդագրություն"></textarea>
                </div>
                <input type="submit" value="Ուղարկել" name="submit" id="submit" className="formSubmit" />
            </div>
        </section>
    </form>
        }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        colorMode: getColor(state)
    }
}

export default connect(mapStateToProps, { setColorModeAC })(Form)
