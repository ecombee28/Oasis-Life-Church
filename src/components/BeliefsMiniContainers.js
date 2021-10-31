import React, { useState } from "react";
import style from "../Styles/ComponentStyles/miniBelief.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BeliefsMiniContainers = ({ title, body }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={style.container}>
        <div className={style.title_container} onClick={() => setOpen(!open)}>
          {title}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${style.icon} ${open && style.rotate}`}
          />
        </div>
        <div className={`${style.body_container} ${open && style.show}`}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BeliefsMiniContainers;
