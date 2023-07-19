import { Link, useLocation } from "react-router-dom";
import { useData } from "../component/Content_cards/main";
import "./Pages.css";
import { useEffect } from "react";
import { useThemeContext } from "../Contexts/ThemeContext";

export const MostRated = () => {
  const location = useLocation();
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const maxTitleLength = 18;
  const { value: initialValue } = useData();
  const value = initialValue.filter((item) => item.row.vote_average >= 7);

  return (
    <div className="marg">
      <p className="description_main">Most Rated</p>
      <div className="main">
        {value.map((item) => (
          <div className="card" key={item.row_idx}>
            <Link to={`${item.row_idx}`}>
              <img
                className="card_img"
                alt={item.row.genres}
                src={`https://image.tmdb.org/t/p/original${item.row.poster_path}`}
              />
            </Link>
            <p className="card_title" style={{ color: isDark ? "#fff" : "#000" }}>
              {item.row.title.slice(0, maxTitleLength)}
            </p>
            <p className="card_title2" style={{ color: isDark ? "#fff" : "#000" }}>
              {item.row.release_date}
            </p>
          </div>
        ))}
      </div>
      <div className="main_all">
        <div className="all_advert">
          <img className="img_advert" src="https://www.hertford.gov.uk/uploads/content/1.png" />
        </div>
      </div>
    </div>
  );
};
