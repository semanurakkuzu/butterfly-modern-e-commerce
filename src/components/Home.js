import {useState} from "react";
import Search from "./Search";
import { MdFavoriteBorder } from "react-icons/md";
import {GrCart } from "react-icons/gr";
import mockApi from "../mockİmg.json"

export default function Home() {
    const [images, setİmages] = useState(mockApi);
    
  return (
    <>
        <Search></Search>
        <div className="row mt-5">
           {images.map(image => (
           <div className="col card-img mt-4">
             <img src={image.img} className="rounded images" alt="..."/>
             <button className="btn btn-light btn-fav"><MdFavoriteBorder /></button>
             <button className="btn btn-light btn-cart"><GrCart/></button>
             <span className="p-price text-dark rounded-2">${image.price}</span>
            </div>
            ))}
          
        </div>
      
    </>
  );
}
