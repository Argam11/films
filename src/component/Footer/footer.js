import "./footer.css";
import { TwitterOutlined, YoutubeOutlined, InstagramOutlined, GithubOutlined, AppleOutlined } from "@ant-design/icons";
import { useThemeContext } from "../../Contexts/ThemeContext";

const comStyle = {
  fontSize: "35px",
  color: "silver",
  cursor: "pointer",
  marginLeft: "40px",
};

const titleStyle = {
  fontSize: "18px",
  color: "silver",
  padding: "10px 28px 10px 28px",
  cursor: "pointer",
  fontFamily: "Poppins, sans-serif",
};

export const Footer = () => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <>
      <div className="films_desc_main">
        <p className="desc_films" style={{ color: isDark ? '#f2f2f2' : '#000' }}>Watch movies online.</p>
        <p className="desc_title" style={{ color: isDark ? '#c2c2c2' : '#000' }}>
          If you enjoy watching movies online and spend a lot of time searching for interesting films, then you've come
          to the right place. At more.tv, you will find a wide selection of movies, including 2023 releases and classics
          from previous years, in various genres - from action and comedy to detective and documentary films. Our
          catalog is constantly updated, so you will always find something new for yourself. Detailed descriptions will
          help you determine whether a chosen film is worth your time, and comments from other viewers will provide a
          fresh perspective on the plot, acting, and special effects. If you enjoy watching foreign films online, you
          will appreciate the golden classics of Hollywood, charming French comedies, passionate Italian dramas, and
          impeccable Asian hits. If you prefer domestic films, you will also find many interesting options. We also
          offer documentaries, short films, art house movies, and plenty of other choices to suit every taste. Don't
          miss the opportunity to watch movies online and choose exactly what you like. We are pleased to present a
          selection of highly rated films by film critics. Here you will find large-scale, colorful, and noteworthy
          films from different genres. The list also includes popular releases. If you haven't had a chance to watch
          them yet, be sure to visit us. The list of available movies for streaming is constantly updated, making
          more.tv an excellent source to keep up with the latest cinema trends. Watch your favorite movies in high
          quality with any internet-enabled device, whether it's a tablet, TV, or smartphone. Forget about intrusive ads
          and low picture or sound quality - we exclude those. Visit more.tv, get comfortable, and choose which story
          you want to enjoy.
        </p>
      </div>
      <div className="footer_back">
        <div className="foot_style">
          <div className="main_icons">
            <a className="inst_href" href="https://www.twitter.com/films_bz/" target="_blank">
              <TwitterOutlined style={comStyle} />
            </a>
            <a className="inst_href" href="https://www.youtube.com/watch?v=p0lD9zLxxMo" target="_blank">
              <YoutubeOutlined style={comStyle} />
            </a>
            <GithubOutlined style={comStyle} />
            <a className="inst_href" href="https://www.instagram.com/films_bz/" target="_blank">
              <InstagramOutlined style={comStyle} />
            </a>
            <a className="inst_href" href="https://tv.apple.com/" target="_blank">
              <AppleOutlined style={comStyle} />
            </a>
          </div>
          <div className="main_title">
            <p style={titleStyle}>Jobs</p>
            <p style={titleStyle}>Advertising</p>
            <p style={titleStyle}>Agreement</p>
            <p style={titleStyle}>Reference</p>
            <p style={titleStyle}>Blog</p>
            <p style={titleStyle}>Offers</p>
            <p style={titleStyle}>All films</p>
            <p style={titleStyle}>What to see</p>
            <p style={titleStyle}>Support</p>
          </div>
          <div className="colaps"></div>
          <div className="main_last">
            <p className="descript_title">© 2003 — 2023, ZAM 18+</p>
            <p className="descript_title2">
              ZAM - we are the best in the world in terms of HD quality films and series. The website does not accept
              advertising.
            </p>
            <p className="descript_title">Company project Yandex</p>
          </div>
        </div>
      </div>
    </>
  );
};
