import { createContext, useEffect, useState, useContext } from "react";
import { ContentCards } from "./content";
import Slider from "../slider/slider";
import "./main.css";
import React from "react";
import { Spiner } from "../Loading/loading";
import { useLocation } from "react-router-dom";

const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [value, setValue] = useState([]);
  const [searchedValue, setSearchedValue] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://datasets-server.huggingface.co/rows?dataset=wykonos%2Fmovies&config=wykonos--movies&split=train&offset=0&limit=100"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data is undefined");
        }
        return response.json();
      })
      .then((responseData) => {
        setValue(responseData.rows);
        setSearchedValue(responseData.rows);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const onSearch = (input) => {
    const filteredResult = value.filter((i) => {
      return i?.row?.title?.toLowerCase().includes(input?.toLowerCase());
    });

    setSearchedValue(filteredResult);
  };

  const onToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  if (isLoading) {
    return <Spiner />;
  }

  return <DataContext.Provider value={{ value, searchedValue, isSearchOpen, onSearch, onToggleSearch }}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Slider />
      <ContentCards />
    </>
  );
};

export default Main;
export { DataContext };
