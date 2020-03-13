import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from './data.json';

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: data,
      detailProduct: data[0],
      mangGioHang: [],
    };
  };
  handlingDetail = (sanPham) => {
    this.setState({
      detailProduct: sanPham,
    });
  };
  handlingGioHang = sanPham => {
    // console.log(sanPham);
    const objsanPham = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      hinhAnh: sanPham.hinhAnh,
      donGia: sanPham.giaBan,
      soLuong: 1,
    };
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(sanPham);
    if (index !== -1) {
      // found exist product;
      // update mount product;
      mangGioHang[index].soLuong++;
    } else {
      //cant find product in array;
      mangGioHang = [...this.state.mangGioHang, objsanPham];
    };
    this.setState({
      mangGioHang,
    });
  };
  timViTri = sanPham => {
    return this.state.mangGioHang.findIndex((item) => {
      return item.maSP === sanPham.maSP;

      // return index, cant find return index -1;
    });
  };
  handleTangGiamSL = (sanPham, status) => {
    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(sanPham);
    if (index !== -1 && status) {
      mangGioHang[index].soLuong++;
    } else {
      if (mangGioHang[index].soLuong > 1) {
        mangGioHang[index].soLuong--;
      }
    }
    this.setState({
      mangGioHang,
    });
  };
  handeDelete = (sanPham) => {

    let mangGioHang = [...this.state.mangGioHang];
    let index = this.timViTri(sanPham);
    if (index !== -1) {
      mangGioHang.splice(index, 1)
    };
    this.setState({
      mangGioHang,
    });
  };
  tinhTongSoLuong = () => {
    let mangGioHang = [...this.state.mangGioHang];
    return mangGioHang.reduce((tong, sp) => {
      return (tong += sp.soLuong)
    }, 0);
  };


  render() {
    let { detailProduct } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tinhTongSoLuong()})
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.mangSanPham} productDetail={this.handlingDetail} gioHang={this.handlingGioHang} />
        <Modal mangGioHang={this.state.mangGioHang} tangGiamSL={this.handleTangGiamSL} delete={this.handeDelete} />
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{detailProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{detailProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{detailProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{detailProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{detailProduct.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{detailProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
