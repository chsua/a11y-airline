import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";
import Announcement from "./Announcement";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count >= 3) return alert("4인 이상은 불가합니다.");

    setCount((prevCount) => prevCount + 1);
    setMessage(`${count + 1}명으로 설정되었습니다.`);
  };

  const decrement = () => {
    if (count <= 0) return alert("0인 이하는 불가합니다.");

    setCount((prevCount) => prevCount - 1);
    setMessage(`${count - 1}명으로 설정되었습니다.`);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label>성인</label>
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
          aria-label="성인 탑승자 한명 줄이기"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          readOnly
          className="spinButtonInput"
          value={count}
          aria-label={`현재 성인승객 ${count}명`}
          aria-live="polite"
          aria-readonly="true"
        />
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한명 늘리기"
        >
          +
        </button>
        <Announcement>{message}</Announcement>
      </div>
    </section>
  );
};

export default SpinButton;
