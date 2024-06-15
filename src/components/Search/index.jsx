import search from "../../icons/search.svg";
import * as SC from "./styles";

export const Search = (props) => (
  <SC.Search>
    <input type="text" placeholder="Поиск" {...props} />
    <img src={search} alt="search" />
  </SC.Search>
);
