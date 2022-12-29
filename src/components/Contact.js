import Nav from "./Nav";
import img from "../images/contact_img.jpg"
import {MdEmail} from 'react-icons/md';
import {MdLocalPhone} from 'react-icons/md';
export default function About() {
  return (
    <>
      <Nav></Nav>
      <div className="container mt-170">
        <div className="row  d-flex align-items-center">
          <div className="col">
            <p className="fs-1 fw-bold">Hi, how can we help you?</p>
            <p className="fs-6 fw-bolder">
            Contact
            </p>
            <p className="fs-6">
            <MdEmail /> hello@butterfly.com
            </p>
            <p className="fs-6">
            <MdLocalPhone />+905555555555
            </p>
          </div>
          <div className="col">
            <img src={img} className="rounded-3"></img>
          </div>
        </div>
      </div>
    </>
  );
}