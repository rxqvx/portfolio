import styled from "styled-components";

export const AnimatedText = styled.h4`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    color: #000;
    background-color: #d8d8d8;
    font-family: "Maitree", serif;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-self: center;
    font-size: 2em;
    font-weight: bold;

    background-image: linear-gradient(
      transparent 0%,
      transparent 90%,
      hotpink 90%,
      hotpink 100%
    );

    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;

    transition: background-size 300ms;
  }

  h1:hover {
    font-weight: bold;
    background-size: 100% 100%;
    background-position-x: left;
  }

  span {
    font-weight: lighter;
    position: relative;
    overflow: hidden;
    display: block;
    line-height: 1.2;
  }

  span::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transform: translateX(-101%);
  }

  span::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #d8d8d8;
    animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transform: translateX(0);
  }

  span:nth-of-type(1)::before,
  span:nth-of-type(1)::after {
    animation-delay: 1s;
  }

  span:nth-of-type(2)::before,
  span:nth-of-type(2)::after {
    animation-delay: 1.5s;
  }

  @keyframes a-ltr-after {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(101%);
    }
  }

  @keyframes a-ltr-before {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

export const TextH1 = styled.h1`
  font-size: 30px;
  font-family: coolvetica;
  text-shadow: 1px 1px 2px black;
`;
