import { Route } from "react-router-dom";
import Main from "../component/Content_cards/main";
import { Routes } from "react-router-dom";
import { AllFilms } from "../Pages/All-films";
import { NewFilms} from "../Pages/New-films";
import { Cartoons } from "../Pages/Cartoons";
import { MostRated } from "../Pages/Most-rated";
import { AboutUs } from "../Pages/About-us";
import { Cart } from "../Pages/CartPage/CartPage";


export const Routing = () => {
    return(
        <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="all-films" element={<AllFilms />}/>
          <Route path="all-films/:id" element={<Cart />} />
          <Route path="/:id" element={<Cart />} />
          <Route path="cartoons/:id" element={<Cart />} />
          <Route path="most-rated/:id" element={<Cart />} />
          <Route path="new-films/:id" element={<Cart />} />
          <Route path="cartoons" element={<Cartoons />} />
          <Route path="most-rated" element={<MostRated />} />
          <Route path="new-films" element={<NewFilms />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
        </>
    )
}