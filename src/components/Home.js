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
           
           <div className="col card-img mt-4">
             <img src="" className="rounded images" alt="..."/>
             <button className="btn btn-light btn-fav"><MdFavoriteBorder /></button>
             <button className="btn btn-light btn-cart"><GrCart/></button>

            </div>
            
            <div className="col card-img mt-4">
             <img src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1600" className="rounded images" alt="..."/>
             <button className="btn btn-light btn-fav"><MdFavoriteBorder /></button>
             <button className="btn btn-light btn-cart"><GrCart/></button>
             <span className="p-price text-dark rounded-2">10$</span>
            </div>
            <div className="col card-img mt-4">
             <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1600" class="rounded images" alt="..."/>
             <button className="btn btn-light btn-fav"><MdFavoriteBorder /></button>
             <button className="btn btn-light btn-cart"><GrCart/></button>
            </div>
            <div className="col card-img mt-4">
             <img src="https://images.pexels.com/photos/1327405/pexels-photo-1327405.jpeg?auto=compress&cs=tinysrgb&w=1600" class="rounded images" alt="..."/>
             <button className="btn btn-light btn-fav"><MdFavoriteBorder /></button>
             <button className="btn btn-light btn-cart"><GrCart/></button>
            </div>
            <div className="col card-img mt-4">
             <img src="https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1600" class="rounded images" alt="..."/>
            </div>
            <div className="col card-img mt-4">
             <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1600" class="rounded images" alt="..."/>
            </div>
            <div className="col card-img mt-4">
             <img src="https://images.pexels.com/photos/1327405/pexels-photo-1327405.jpeg?auto=compress&cs=tinysrgb&w=1600" class="rounded images" alt="..."/>
            </div>
       
        </div>
      
    </>
  );
}
