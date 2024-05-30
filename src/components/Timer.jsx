import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { oneHour } from "../utils/constants";

const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-grey-dark);

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2rem;
    }
  }
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  & span {
    transform: translate(0, -30%);
  }
`;

const TimeUnit = styled.div`
  text-align: center;

  & div {
    font-size: 2rem;
    font-weight: 700;
    background-color: var(--color-zinc-300);
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 3.6rem;
    }

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      font-size: 3.2rem;
    }
  }

  & p {
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;

    /* BELOW 704 PIXELS (Small Tablets) */
    @media (max-width: 44em) {
      font-size: 2.2rem;
    }

    /* BELOW 544 PIXELS (Phones) */
    @media (max-width: 34em) {
      font-size: 2rem;
    }
  }
`;

function Timer({ numHours = 5, numMin = 1, numSec = 5 }) {
  const totalTime = numHours * oneHour + numMin * 60 + numSec; // total time in seconds

  const [time, setTime] = useState(totalTime);

  const hour = useRef(numHours);
  const minute = useRef(numMin);
  const second = useRef(numSec);

  function resetTime() {
    second.current = numSec;
    minute.current = numMin;
    hour.current = numHours;
    setTime(totalTime);
  }

  function enhanceTimeShape(timeString) {
    if (timeString.length === 1) {
      return `0${timeString}`;
    }

    return timeString;
  }

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (second.current === 0) {
          second.current = 60;
          minute.current--;
        }

        if (minute.current === 0 && hour.current !== 0) {
          minute.current = 59;
          hour.current--;
        }

        if (time !== 0) {
          setTime((time) => time - 1);
          second.current--;
        }

        //reset timer if time finished
        if (time === 0) {
          resetTime();
        }
      }, 1000);

      return () => clearInterval(interval);
    },
    [time]
  );

  return (
    <StyledTimer>
      <p>Hurry Up! Offer ends in:</p>
      <TimeContainer>
        <TimeUnit>
          <div>{enhanceTimeShape(`${hour.current}`)}</div>
          <p>Hours</p>
        </TimeUnit>
        <span>:</span>

        <TimeUnit>
          <div>{enhanceTimeShape(`${minute.current}`)}</div>
          <p>Mins</p>
        </TimeUnit>
        <span>:</span>

        <TimeUnit>
          <div>{enhanceTimeShape(`${second.current}`)}</div>
          <p>sec</p>
        </TimeUnit>
      </TimeContainer>
    </StyledTimer>
  );
}

export default Timer;
