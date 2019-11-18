/**
 * @author Mateusz Cholcha
 */

import React from "react";
import "./Property.css";


function Property({className, term, description}) {

  const desc = Array.isArray(description) ? description.join(', ') : description

  return (
    <div className={`property ${className}`}>
      <dt className="property__term">{term}</dt>
      <dd className="property__description">{desc}</dd>
    </div>
  );
}

export default React.memo(Property);
