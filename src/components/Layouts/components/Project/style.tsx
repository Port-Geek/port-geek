import styled from "styled-components";

export interface iButtons {
  padding: number;
  fontSize: number;
  titleSize: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const ProjectStyled = styled.section<iButtons>`
  position: relative;
  .ProjectImage__Box {
    display: flex;
    width: 90%;
    height: max-content;
    max-width: 18.75em;
    border: solid 2px var(--borderUserIcon);
    transition: all 0.3s;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h2 {
    font-size: ${({ titleSize }) => `${titleSize}em`};
    color: ${({ color }) => `var(${color})`};
    font-weight: 700;
  }

  h3 {
    color: ${({ color }) => `var(${color})`};
    padding: ${({ padding }) => `${padding}em 0`};
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    padding: ${({ padding }) => `${padding}em`};
    min-height: 50px;

    font-size: ${({ fontSize }) => `${fontSize}em`};
    font-weight: bold;
    color: ${({ color }) => `var(${color})`};
    background-color: ${({ bgColor }) => `var(${bgColor})`};
    border: 1px solid ${({ borderColor }) => `var(${borderColor})`};
    border-radius: 8px;
    opacity: 0.6;

    transition: 1s ease;

    &:hover {
      opacity: 1;
    }
  }

  button {
    padding: ${({ padding }) => `${padding}em`};
    min-height: 50px;

    font-size: ${({ fontSize }) => `${fontSize}em`};
    font-weight: bold;
    color: ${({ color }) => `var(${color})`};
    background-color: ${({ bgColor }) => `var(${bgColor})`};
    border: 1px solid ${({ borderColor }) => `var(${borderColor})`};
    border-radius: 8px;
    opacity: 0.6;

    transition: 1s ease;

    &:hover {
      opacity: 1;
    }
  }
`;
