import HeaderTop from "../components/HeaderTop";
import HeaderMiddle from "../components/HeaderMiddle";
import HeaderMenu from "../components/HeaderMenu";

const Header = () => {
  return (
    <div className="Header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderMenu />
    </div>
  )
}

export default Header