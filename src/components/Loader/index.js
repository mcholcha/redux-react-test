/**
 * @author Mateusz Cholcha
 */

import React from "react";
import "./Loader.css";

function Loader({loading, children}) {

  const loader = (<div className="loader"><div  className="loader__container">Loading...</div></div>)

  return (
    <React.Fragment>
      {!loading ? children : loader}
    </React.Fragment>
  );
}

export default Loader;
