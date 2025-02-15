import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";
import { PERSON_TYPE } from "../constants";

const SpinButton = ({
  personType,
}: {
  personType: keyof typeof PERSON_TYPE;
}) => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    if (count >= 3) return alert("4인 이상은 불가합니다.");

    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count <= 0) return alert("0인 이하는 불가합니다.");

    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className="spinButtonContainer">
      <div className="spinButtonLabel">
        <label>{PERSON_TYPE[personType]}</label>
        <div
          tabIndex={0}
          className="helpIcon"
          onMouseEnter={toggleTooltip}
          onMouseLeave={toggleTooltip}
        >
          ?
          {isTooltipVisible && (
            <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>
          )}
        </div>
      </div>
      <button
        onClick={decrement}
        className="spinButton"
        aria-label={`${PERSON_TYPE[personType]} 한명 줄이기`}
      >
        -
      </button>
      <input
        type="text"
        role="spinbutton"
        readOnly
        // disabled
        className="spinButtonInput"
        value={count}
        aria-label={`현재 ${PERSON_TYPE[personType]} 승객 ${count}명`}
        aria-disabled="true"
        aria-live="polite"
        aria-readonly="true"
      />
      <button
        onClick={increment}
        className="spinButton"
        aria-label={`${PERSON_TYPE[personType]} 한명 늘리기`}
      >
        +
      </button>
    </div>
  );
};

export default SpinButton;
