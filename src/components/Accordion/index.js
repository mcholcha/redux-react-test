/**
 * @author Mateusz Cholcha
 */
import React, {useRef, useMemo} from "react";
import "./Accordion.css";

const TOGGLE_CLASS_NAME = {
  isClose: 'is-close',
  isOpen: 'is-open'
}

function Accordion({children, title, isOpen, onToggle}) {
  const content = useRef(null)

  const toggleClassName = useMemo(() => isOpen ? TOGGLE_CLASS_NAME.isOpen : TOGGLE_CLASS_NAME.isClose, [isOpen])
  const height = useMemo(() => !isOpen ? "0px" : `${content.current.scrollHeight}px`, [isOpen])

  const onClickToggle = () => {
    onToggle(!isOpen)
  }

  return (
    <div className={`accordion ${toggleClassName}`}>
      <div
        className="accordion__title"
        onClick={onClickToggle}
      >
        {title}
      </div>

      <div
        className="accordion__content"
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        {children}
      </div>


    </div>
  );
}

export default React.memo(Accordion);
