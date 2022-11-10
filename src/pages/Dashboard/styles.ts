import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcEditImage, FcEmptyTrash, FcShare } from "react-icons/fc";

interface IStyledProps {
  backgroundColor: string;
  cursorPointer: string;
  setScale: string;
}

export const IconTrash = styled(FcEmptyTrash)`
  width: 1.823rem;
  height: 1.75rem;

  cursor: pointer;

  :hover {
    margin-top: -10px;

    transition: all 0.2s ease-in-out;
  }
`;

export const IconEdit = styled(FcEditImage)`
  width: 1.823rem;
  height: 1.75rem;

  cursor: pointer;

  :hover {
    margin-top: -10px;

    transition: all 0.2s ease-in-out;
  }
`;

export const IconShare = styled(FcShare)`
  width: 1.823rem;
  height: 1.75rem;

  cursor: pointer;

  :hover {
    margin-top: -10px;

    transition: all 0.2s ease-in-out;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;

  color: var(--color-grey-3);

  :hover {
    color: var(--color-grey-2);
  }
`;

export const Container = styled.div`
  font-family: var(--font-secondary-inter);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  min-width: 100%;
  min-height: 100vh;

  background-color: var(--color-grey-1);

  header {
    z-index: 1;
    position: fixed;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 6rem;

    background-color: var(--color-primary);
    border-bottom: 2px solid var(--color-black-mode);

    @media (max-width: 768px) {
      height: 8rem;
      align-items: center;
    }

    .div-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: unset;
      }
    }

    .logo {
      margin-left: 10rem;

      @media (max-width: 1516px) {
        margin-left: 0;
      }

      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
    .container-user {
      display: flex;
      align-items: center;
      gap: 40px;

      margin-right: 5rem;

      @media (max-width: 1344px) {
        margin-right: 1rem;
      }

      @media (max-width: 768px) {
        margin-right: 0;
      }

      span {
        color: var(--color-grey-3);

        font-weight: var(--font-weight-600);
      }
    }

    .div-link {
      :hover {
        div {
          border-bottom: 2px solid black;
          animation: showBar 0.3s;
        }
      }
      div {
        border-bottom: 2px solid transparent;
        width: 100%;
      }
    }

    @keyframes showBar {
      0% {
        width: 10%;
      }
      50% {
        width: 50%;
      }
      100% {
        width: 100%;
      }
    }
  }

  .container-secondary {
    display: flex;
    justify-content: space-between;
    gap: 10rem;

    width: 1200px;
    max-width: 100%;

    padding: 10px;
    margin-top: 10rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      margin-top: 8rem;
    }

    .div-alert {
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        margin-top: 10rem;
      }

      p {
        text-align: center;
        font-size: var(--font-subtitle-24);
        font-weight: var(--font-weight-700);

        @media (max-width: 768px) {
          font-size: var(--font-subtitle-20);
        }
      }
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      border-radius: 8px;
      border: 2px solid var(--color-primary);
      padding: 10px;

      width: 600px;
      height: 60%;

      background-color: var(--color-grey-2);

      @media (max-width: 768px) {
        width: 90%;
      }

      .mini-port {
        width: 90%;
        height: auto;

        display: block;
        margin: 1rem auto 0;

        cursor: pointer;

        transition: 0.5s;

        :active {
          scale: 0.95;
        }

        :hover {
          opacity: 0.6;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 80%;
      }
    }

    .container-final {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 6rem;

      @media (max-width: 768px) {
        width: 90%;
      }

      .background-btn {
        width: 500px;

        @media (max-width: 1040px) {
          width: 400px;
        }
        @media (max-width: 851px) {
          width: 350px;
        }

        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;

export const ButtonNewLayout = styled.button<IStyledProps>`
  position: absolute;
  width: 140px;
  height: 40px;
  bottom: 32%;
  margin-left: 4rem;

  border: transparent;
  border-radius: var(--radius-8);

  background-color: ${(props) => props.backgroundColor};
  color: var(--color-grey-0);

  font-weight: var(--font-weight-600);

  cursor: ${(props) => props.cursorPointer};

  transition: 0.5s;

  :active {
    scale: ${(props) => props.setScale};
  }

  :hover {
    background-color: var(--color-grey-2);
  }

  @media (max-width: 768px) {
    top: 0;
    margin-left: 0;
  }
`;
