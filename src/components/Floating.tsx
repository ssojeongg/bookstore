import '../assets/css/Floating.css'
import '../assets/reponsive/Res_Floating.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMessage, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'

const Floating = () => {
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <div className="Floating">
      <div className="inner">
        <div className="floating_area">
          <div className="floating_btn">
            <p><FontAwesomeIcon icon={faMessage} /></p>
            <p>챗봇</p>
          </div>
          <div className="floating_btn" onClick={scrollToTop}>
            <p><FontAwesomeIcon icon={faSquareCaretUp} /></p>
            <p>Top</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Floating