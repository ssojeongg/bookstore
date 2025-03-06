import Banner from "../components/Banner"
import Best from "../components/Best"
import EventTab from "../components/EventTab"
import Slide from "../components/Slide"

const Main = () => {
  return (
    <div className="Main">
      <Slide />
      <Best />
      <Banner />
      <EventTab />
    </div>
  )
}

export default Main