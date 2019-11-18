import React, {useMemo} from "react";
import Properties from "../Properties"
import * as text from "../../i18n/en/episode_properties"
import "./Episode.css";

function Episode({className, properties}) {
  const episodeProperties = useMemo(() => (
    Object.keys(properties).map(key => ({
      term: text[key],
      description: properties[key]
    }))
  ), [properties])

  return (
    <article className={`episode ${className}`}>
      <Properties
        className="episode__properties"
        properties={episodeProperties}
      />
    </article>
  );
}

export default React.memo(Episode);
