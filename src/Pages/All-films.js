import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../component/Content_cards/main";
import "./Pages.css";
import PaginationControlled from "./pagination";
import { useThemeContext } from "../Contexts/ThemeContext";

export const AllFilms = () => {
  const { value, isSearchOpen, searchedValue } = useData();
  const [page, setPage] = useState(1);
  const location = useLocation();
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  const data = (isSearchOpen ? searchedValue : value).slice((page - 1) * 20, page * 20);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const maxTitleLength = 18;

  return (
    <div className="marg">
      <p className="description_main">All Films</p>
      <div className="main">
        {data.map((item) => (
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
      <PaginationControlled page={page} handleChange={handlePageChange} />
      <div className="main_all">
        <div className="all_advert">
          <img
            className="img_advert"
            src="https://imageio.forbes.com/specials-images/imageserve/644740dcd70af14cc0a821c1/netflix-ad-supported-tiers/960x0.jpg?format=jpg&width=960"
          />
        </div>
      </div>
    </div>
  );
};
