import styled, { keyframes } from 'styled-components';
import * as colors from '../../config/colors';

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  z-index: 2;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.primaryColor} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  .vazia {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgba(0,0,0,0.8);
  }

  span {
    z-index: 2;
  }
`;
