import { Link } from "react-router-dom";
import { useData } from "../main";

export const Card2 = ({ isDark }) => {
  const { value } = useData();
  const displayedCards2 = value.slice(7, 13);
  const maxTitleLength = 18;

  return (
    <>
      <p className="title_main" style={{ color: isDark ? "aliceblue" : "#000" }}>
        Movie collections
      </p>
      <div className="main">
        {displayedCards2.map((item) => (
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
    </>
  );
};
