import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <button className="btn btn-success" onClick={() => { this.props.productDetail(sanPham) }}>Chi tiết</button>
            <button className="btn btn-danger" onClick={() => { this.props.gioHang(sanPham) }}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
