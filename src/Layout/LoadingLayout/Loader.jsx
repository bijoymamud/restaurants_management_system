import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="text">
          <span>Loading</span>
        </div>
        <div className="line" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(8px) saturate(1.4);
  -webkit-backdrop-filter: blur(8px) saturate(1.4);
  background: rgba(
    20,
    20,
    30,
    0.35
  ); /* very light tint — adjust opacity if needed */
  pointer-events: none; /* allows clicks through if you want */

  .loader {
    --main-size: 4.8em;
    --text-color: #ffffff;
    --accent-color: #ff6e02;
    --shine-color: rgba(255, 110, 2, 0.35);
    --shadow-color: rgba(255, 110, 2, 0.6);

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    font-size: var(--main-size);
    font-weight: 900;
    text-transform: uppercase;
    color: var(--text-color);
    width: 8em;
    height: 1.4em;
    filter: drop-shadow(0 0 0.12em var(--shine-color));
    pointer-events: auto;
  }

  .loader .text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
  }

  .loader .text:nth-child(1) {
    clip-path: polygon(0% 0%, 11.11% 0%, 11.11% 100%, 0% 100%);
    font-size: calc(var(--main-size) / 20);
    margin-left: -2.3em;
    opacity: 0.5;
  }

  .loader .text:nth-child(2) {
    clip-path: polygon(11.11% 0%, 22.22% 0%, 22.22% 100%, 11.11% 100%);
    font-size: calc(var(--main-size) / 16);
    margin-left: -1.1em;
    opacity: 0.65;
  }

  .loader .text:nth-child(3) {
    clip-path: polygon(22.22% 0%, 33.33% 0%, 33.33% 100%, 22.22% 100%);
    font-size: calc(var(--main-size) / 13);
    margin-left: -0.4em;
    opacity: 0.8;
  }

  .loader .text:nth-child(4) {
    clip-path: polygon(33.33% 0%, 44.44% 0%, 44.44% 100%, 33.33% 100%);
    font-size: calc(var(--main-size) / 11);
    margin-left: -0.1em;
    opacity: 0.92;
  }

  .loader .text:nth-child(5) {
    clip-path: polygon(44.44% 0%, 55.55% 0%, 55.55% 100%, 44.44% 100%);
    font-size: calc(var(--main-size) / 10);
    margin-left: 0em;
    opacity: 1;
  }

  .loader .text:nth-child(6) {
    clip-path: polygon(55.55% 0%, 66.66% 0%, 66.66% 100%, 55.55% 100%);
    font-size: calc(var(--main-size) / 11);
    margin-left: 0.1em;
    opacity: 0.92;
  }

  .loader .text:nth-child(7) {
    clip-path: polygon(66.66% 0%, 77.77% 0%, 77.77% 100%, 66.66% 100%);
    font-size: calc(var(--main-size) / 13);
    margin-left: 0.4em;
    opacity: 0.8;
  }

  .loader .text:nth-child(8) {
    clip-path: polygon(77.77% 0%, 88.88% 0%, 88.88% 100%, 77.77% 100%);
    font-size: calc(var(--main-size) / 16);
    margin-left: 1.1em;
    opacity: 0.65;
  }

  .loader .text:nth-child(9) {
    clip-path: polygon(88.88% 0%, 100% 0%, 100% 100%, 88.88% 100%);
    font-size: calc(var(--main-size) / 20);
    margin-left: 2.3em;
    opacity: 0.5;
  }

  .loader .text span {
    animation: scrolling 2.4s cubic-bezier(0.1, 0.6, 0.9, 0.4) infinite,
      shadow 2.4s cubic-bezier(0.1, 0.6, 0.9, 0.4) infinite;
  }

  /* Orange → White → Orange gradient flow */
  .loader .text span {
    background: linear-gradient(
      90deg,
      var(--accent-color) 0%,
      var(--text-color) 40%,
      var(--accent-color) 80%,
      var(--text-color) 120%
    );
    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .loader .text:nth-child(5) span {
    background: var(--text-color);
    color: var(--text-color);
    text-shadow: 0 0 12px var(--accent-color);
  }

  /* Underline bar */
  .loader .line {
    position: relative;
    height: 0.07em;
    width: calc(var(--main-size) * 0.9);
    margin-top: 1.1em;
    border-radius: 0.1em;
    overflow: hidden;
  }

  .loader .line::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--accent-color);
    opacity: 0.3;
  }

  .loader .line::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--accent-color);
    border-radius: 0.1em;
    transform: translateX(-100%);
    animation: wobble 2.4s cubic-bezier(0.4, 0.1, 0.6, 0.9) infinite;
  }

  @keyframes wobble {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes scrolling {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default Loader;
