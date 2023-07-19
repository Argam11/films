import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "./Switch.js";
import "./menu.css";
import { menu_consts } from "./header_consts.js";
import { useThemeContext } from "../../Contexts/ThemeContext";
import { useData } from "../../component/Content_cards/main";
import "./SearchInput/Search.css";

export const Menu = () => {
  const { isSearchOpen, onSearch, onToggleSearch } = useData();
  const navigate = useNavigate();
  const location = useLocation();
  // const [showSearchDiv, setShowSearchDiv] = useState(false);
  const [search, setSearch] = useState('');
  const { theme, setTheme } = useThemeContext();
  const isDark = theme === "dark";

  useEffect(() => {
    if(isSearchOpen && location.pathname !== "/all-films" ) {
      // setShowSearchDiv(false);
      onToggleSearch(false);
    }
  }, [location]);

  const handleClickSearch = () => {
    // setShowSearchDiv(!showSearchDiv);
    onToggleSearch();
    if (!isSearchOpen) {
      navigate("all-films");
    }
  };

  const handleSwitcherChange = (event) => {
    const { checked } = event.target;
    setTheme(checked ? "light" : "dark");
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#151617" : "#fff";
  }, [isDark]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    onSearch(value);
  };

  return (
    <>
      <div className="main_menu">
        <ul className="menu">
          <Link to="/">
            <img
              className="menu_logo"
              alt="logo"
              src="https://t4.ftcdn.net/jpg/05/41/13/85/360_F_541138545_5Kv07srfEnUhmLxq4Iig9h4aptGXFReJ.jpg"
            />
          </Link>
          {menu_consts.map((item) => (
            <li className="menu_list" key={item.id}>
              <Link className="menu_link" to={item.link}>
                {item.menu_title}
              </Link>
            </li>
          ))}
          <div className="search_logo" onClick={handleClickSearch}>
            <SearchOutlined />
          </div>
          <MaterialUISwitch checked={!isDark} onChange={handleSwitcherChange} />
        </ul>
      </div>
      {isSearchOpen && (
        <div className="div_style">
          <div>
            <input className="input_style" type="text" placeholder="Search for movies and series" value={search} onChange={handleSearch} />
          </div>
          <div style={{ position: "absolute", color: "white", fontSize: "28px", left: "69%" }}>
            <SearchOutlined />
          </div>
        </div>
      )}
    </>
  );
};
