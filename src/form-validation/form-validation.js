import React, { Component } from "react";

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                tennv: "",
                manv: "",
                email: "",
            },
            errors: {
                tennv: "",
                manv: "",
                email: "",
            },
            formValid: false, manvValid: false, tennvVaid: false, emailValid: false,
        };
    };
    handleOnchange = event => {
        let { name, value } = event.target;
        this.setState({
            values: { ...this.state.values, [name]: value }
        },
            () => {
                console.log(this.state);
            }
        );
    };
    handleError = event => {
      


        let { name, value } = event.target;
        let message = value === "" ? name + " không được rỗng" : "";
        let { manvValid, tennvVaid, emailValid } = this.state;

        switch (name) {
            case "manv":
                manvValid = message === "" ? true : false;
                if (value && value.length < 4) {
                    message = " Độ dài mã nhân viên phải lớn hơn 3";
                    manvValid = false;
                };
                break;
            case "tennv":
                tennvVaid = message === "" ? true : false;
                break;
            case "email":
                emailValid = message === "" ? true : false;
                if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    message = " Email không đúng định dạng"
                    emailValid = false;
                };
                break;
            default: break;
        }
        this.setState({
            errors: { ...this.state.errors, [name]: message },
            manvValid, tennvVaid, emailValid,
        },
            () => {
                console.log(this.state);
                this.formValidation();
            }
        );
    };
    formValidation = () => {
        this.setState({
            formValid: this.state.manvValid && this.state.tennvVaid && this.state.emailValid,
        })
    }

    render() {

        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Mã Nhân Viên </label>
                        <input type="text" className="form-control" name="manv" onChange={this.handleOnchange} onBlur={this.handleError} />
                        {this.state.errors.manv === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.manv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Tên Nhân Viên</label>
                        <input type="text" className="form-control" name="tennv" onChange={this.handleOnchange} onBlur={this.handleError} />
                        {this.state.errors.tennv === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.tennv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" onChange={this.handleOnchange} onBlur={this.handleError} />
                        {this.state.errors.email === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.email}</div>)}
                    </div>
                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                        Submit
          </button>
                </form>
            </div>
        );
    };
};