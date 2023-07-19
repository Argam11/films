import React from 'react';
import { SearchOutlined } from "@ant-design/icons";

export const SearchOutlined = ({ onClick }) => {
  return (
    <div className="search_logo">
      <SearchOutlined onClick={onClick}/>
    </div>
  );
};