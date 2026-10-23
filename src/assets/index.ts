import ssLogo from "./images/ss_logo.png";
import browniesStack from "../../assest/BROWNIES.jpg";
import brownieBitesBox from "../../assest/SPECIAL BOX.jpg";
import chocoLava from "../../assest/CHOCO LAVA.jpg";
import bomboloni from "../../assest/BOMBOLONI.jpg";
import miniChocolates from "../../assest/MINI CHOCOLATES.jpg";
import hotChocolate from "../../assest/HOT CHOCOLATE.jpg";
import fullMenu from "./images/ss_home_bakes_menu.png";
import behindTheBakesVideo from "../../assest/behind the bakes.mp4";

export const assets = {
  logo: ssLogo,
  brownies: browniesStack,
  specialBox: brownieBitesBox,
  chocoLava: chocoLava,
  bomboloni: bomboloni,
  miniChocolates: miniChocolates,
  hotChocolate: hotChocolate,
  menu: fullMenu,
  video: behindTheBakesVideo,
} as const;

export default assets;
