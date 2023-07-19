import { Advert1 } from "./Adverts/Advert1";
import { Advert2 } from "./Adverts/Advert2";
import { Card1 } from "./Cards/cards1";
import { Card2 } from "./Cards/cards2";
import { Card3 } from "./Cards/cards3";
import { Card4 } from "./Cards/cards4";
import { Card5 } from "./Cards/cards5";
import { Card6 } from "./Cards/cards6";
import { useThemeContext } from "../../Contexts/ThemeContext";

export const ContentCards = () => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <>
      <Card1 isDark={isDark} />
      <Card2 isDark={isDark} />
      <Card3 isDark={isDark} />
      <Advert1 />
      <Card4 isDark={isDark} />
      <Card5 isDark={isDark} />
      <Card6 isDark={isDark} />
      <Advert2 />
    </>
  );
};
