/**
 * @author Mateusz Cholcha
 */

import React from "react";
import Property from "./Property"


function Properties({className, properties}) {
  return (
    <dl className={`properties ${className}`}>
      {
        properties.map(({term, description}) => (
          <Property
            key={term}
            className="properties__item"
            term={term}
            description={description}
          />
        ))
      }
    </dl>
  );
}

export default React.memo(Properties);
