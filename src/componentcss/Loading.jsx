
import nxc from "../img/space.webp";
import "./loading.css";

export default function Loading() {

    return(
           <div className="loading-screen">
              <div className="overlaybg"></div>
         <div className="lingk">
            <img
            src={nxc}
            alt="logo"
            className="loading-logo"
          />
        
         
        
          {/* SVG circular progress that follows the circle border; starts at 12 o'clock */}
          <svg className="progress-svg" viewBox="0 0 120 120" aria-hidden="true">
            <circle className="progress-track" cx="60" cy="60" r="54" />
            <circle className="progress-circle" cx="60" cy="60" r="54" />
          </svg>

          <p className="loading-text">
            LOADING...
          </p>
         </div>
        </div>
    );
}