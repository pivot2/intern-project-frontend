import React, { Component, Fragment } from "react";
import "./styles/admin.css";
import icon from "./icon/add.svg";
import Select from "react-select";
import { AdminSideBar } from "./component/side-bar";

function ShowImg(e) {
  if (e.target.files) {
    let files = e.target.files;
    let cover = document.getElementsByClassName("grid-center");
    for (let i = 0; i < files.length; i++) {
      //cover[i].src = require("./images/avatar.jpg");
      var reader = new FileReader();

      reader.onload = function (e) {
        cover[i].innerHTML = `<img src=${e.target.result} alt=""/>`;
      };

      reader.readAsDataURL(files[i]);
    }
  }
}

class Upload extends Component {
  render() {
    let arr = [1, 2, 3, 4];
    const categories = [
      { value: "Casual dresses", label: "Casual dresses" },
      { value: "Rompers / Jumpsuits", label: "Rompers / Jumpsuits" },
      { value: "Going out dresses", label: "Going out dresses" },
      { value: "Party / Ocassion dresses", label: "Party / Ocassion dresses" },
      { value: "Mini dresses", label: "Mini dresses" },
      { value: "Maxi / Midi dresses", label: "Maxi / Midi dresses" },
      { value: "Sets", label: "Sets" },
    ];
    const sizes = [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ];
    const colors = [
      { value: "Red", label: "Red" },
      { value: "Blue", label: "Blue" },
      { value: "Brown", label: "Brown" },
      { value: "Orange", label: "Orange" },
    ];
    return (
      <Fragment>
        <p class="big-headline">ADD PRODUCT</p>
        <form action="/product/add" method="POST" enctype="multipart/form-data">
          <div className="d-flex">
            {arr.map((i) => {
              return (
                <label id="upload" for="upload-photo">
                  <div className="grid-center">
                    <div style={{ textAlign: "center" }}>
                      <img
                        style={{ width: "24px", height: "24px" }}
                        src={icon}
                        alt=""
                      />
                      <p>Add photo</p>
                    </div>
                  </div>
                </label>
              );
            })}

            <input
              type="file"
              name="file[]"
              id="upload-photo"
              onChange={ShowImg}
              multiple
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="price">PRICE</label>
            <input type="text" name="price" />
          </div>
          <div className="form-group">
            <label htmlFor="categories">CATEGORIES</label>
            <Select
              options={categories}
              isMulti
              name="categories"
              className="mul-select"
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">BRAND</label>
            <input type="text" name="brand" />
          </div>
          <div className="form-group">
            <label htmlFor="size">SIZE</label>
            <Select
              options={sizes}
              isMulti
              name="size"
              className="mul-select"
            />
          </div>
          <div className="form-group">
            <label htmlFor="colors">COLORS</label>
            <Select
              options={colors}
              isMulti
              name="colors"
              className="mul-select"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">QUANTITY</label>
            <input type="text" name="quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="des">DESCRIPTION</label>
            <textarea type="text" name="des" rows="4" />
          </div>
          <input type="submit" />
        </form>
      </Fragment>
    );
  }
}
class UploadPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="row admin">
          <div className="col-2">
            <AdminSideBar />
          </div>

          <div className="col-9 admin-content">
            <Upload />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default UploadPage;
