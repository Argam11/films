import { useLocation, useParams } from "react-router-dom";
import { useData } from "../../component/Content_cards/main";
import { useEffect } from "react";
import "./CartPage.css"
import CustomizedRating from "./Rating";
import { InstagramOutlined } from "@ant-design/icons";
import MyVideoComponent from "./VideoPlayer";



export const Cart = () => {
const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { id } = useParams();
  const { value: initialValue } = useData();
  const value = initialValue.filter(item => item.row_idx == id);
  const cart = value[0];
  const oldGenres = cart.row.genres;
  const genres = oldGenres.split('-').join(',');
  const oldActors = cart.row.credits;
  const actorsArray = oldActors.split('-');
  const actors = actorsArray.slice(0, 6).join(',');
  const oldProduct = cart.row.production_companies;
  const product = oldProduct.split('-').join(',');
  return (
    <>
      <div className="marg">
        <h1 className="Cart_Title">{cart.row.title}</h1>
        <h2 className="Cart_Subtitle">{cart.row.tagline}</h2>
        <div className="Cart_Main">
          <img
              className="cart_img"
              alt={cart.row.genres}
              src={`https://image.tmdb.org/t/p/original${cart.row.poster_path}`}
          />
          <div className="table-div">
            <table>
              <tbody>
                <tr>
                  <td>Premier:</td>
                  <td>{cart.row.release_date}</td>
                </tr>
                <tr>
                  <td>Genre:</td>
                  <td>{genres}</td>
                </tr>
                <tr>
                  <td>Budget:</td>
                  <td>{cart.row.budget} $</td>
                </tr>
                <tr>
                  <td>Revenue: </td>
                  <td> {cart.row.revenue} $</td>
                </tr>
                <tr>
                  <td>Actors:</td>
                  <td>{actors}</td>
                </tr>
                <tr>
                  <td>Time:</td>
                  <td>{cart.row.runtime} minutes</td>
                </tr>
                <tr>
                  <td>Product:</td>
                  <td>{product} minutes</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>{cart.row.status}</td>
                </tr>
                <tr>
                  <td>Voting:</td>
                  <td>{cart.row.vote_average}</td>
                </tr>
                <tr>
                  <td>Count:</td>
                  <td>{cart.row.vote_count}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="main_descrip">
            <span className="cart_desc">What is the movie about.</span>
            <span className="over_desc">{cart.row.overview}</span>
        </div>
        <br/>
        <div>
        <span className="cart_desc2">Rate the film.</span>
        <CustomizedRating />
        </div>
        <div className="video">
            < MyVideoComponent />
        </div>
        <div className="advert_spr">
          <div className="insta_advert">
            <div>
                <p className="insta_desc">Films on Instagram</p>
                <p className="insta_title">Be the first to know about what's new</p>
                <button className="subscribe_btn">
            <a  className="inst_href" href="https://www.instagram.com/films_bz/" target="_blank">Subscribe</a>
          </button>
            </div>
            <div>
                <InstagramOutlined className="instagram" />
            </div>
          </div>
          <img className="img_style" src="https://media.licdn.com/dms/image/C4E12AQFkxVGzpqXmAQ/article-cover_image-shrink_720_1280/0/1621001878635?e=2147483647&v=beta&t=P7hzwhwxQZIkIpNkH5gYkrH0ra5ApoBR6BtEXCtARUU" />
        </div>
      </div>
    </>
  );
};