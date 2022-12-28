import image from "../images/about_image.png";
import Nav from "./Nav";

export default function About() {
  return (
    <>
      <Nav></Nav>
      <div className="container mt-170">
        <div className="row text-center d-flex align-items-center">
          <div className="col">
            <p className="fs-1 fw-bold"> Photos for everyone</p>
            <p className="fs-6">
              Over 3 million free high-resolution images brought to you by the
              world’s most generous community of photographers.
            </p>
            <button className="btn btn-secondary">Start Browsing</button>
          </div>
          <div className="col">
            <img src={image}></img>
          </div>
        </div>
      </div>
    </>
  );
}
