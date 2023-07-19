import { Link } from "react-router-dom";
import { useData } from "../main";

export const Card3 = ({ isDark }) => {
  const { value } = useData();
  const displayedCards3 = value.slice(14, 20);
  const maxTitleLength = 18;

  return (
    <>
      <p className="title_main" style={{ color: isDark ? "aliceblue" : "#000" }}>
        Watch in high quality
      </p>
      <div className="main">
        {displayedCards3.map((item) => (
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
