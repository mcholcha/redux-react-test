import React, {useContext, useEffect} from "react";
import Episode from "../Episode"
import Accordion from "../Accordion"
import {AccordionsContext, AccordionsContextProvider} from "../../context/accordions/AccordionsContextMangement"
import "./Episodes.css";


function EpisodesImpl({episodes}) {

  const accordions = useContext(AccordionsContext)

  useEffect(() => {
    console.log('effect register')
    accordions.registerAllChildren(episodes.map(e => e.id))

    return () => {
      console.log('effect unregister')
      accordions.unregisterAllChildren()
    }
  }, [episodes])

  return (
    <div className="episodes">
      <div className="episodes__header">
        <h1 className="episodes__title">List of Episodes</h1>
        <button className="episodes__button button" onClick={() => accordions.setAll(!accordions.isAllOpen)}>toggle all</button>
      </div>

      <ol className="episodes__list">
        {
          episodes.map(episode => (
            <li className="episodes__list-item" key={episode.id}>
              <Accordion
                title={(
                  <h2 className="episodes__list-item-title">{`Episode ${episode.id}`}</h2>
                )}
                isOpen={accordions.children[episode.id]}
                onToggle={(isOpen) => {
                  accordions.setChild(episode.id, isOpen)
                }}
              >
                <Episode
                  className="episodes__episode"
                  properties={episode}
                />
              </Accordion>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

function Episodes(props) {
  return (
    <AccordionsContextProvider>
      <EpisodesImpl {...props} />
    </AccordionsContextProvider>
  )
}

export default Episodes;
