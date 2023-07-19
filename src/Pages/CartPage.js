import { useLocation, useParams } from "react-router-dom";
import { useData } from "../component/Content_cards/main";
import { useEffect } from "react";

export const Cart = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { id } = useParams();
  const { value: initialValue } = useData();
  const value = initialValue.filter((item) => item.row_idx == id);
  const cart = value[0];

  return (
    <div className="marg">
      <img
        className="card_img"
        alt={cart.row.genres}
        src={`https://image.tmdb.org/t/p/original${cart.row.poster_path}`}
      />
    </div>
  );
};
