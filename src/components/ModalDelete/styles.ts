import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    max-width: 100%;

    padding: 20px;

    border-radius: var(--radius-4);

    background-color: var(--color-grey-0);

    @media (max-width: 768px) {
      width: 80%;
    }

    .div-btn {
      display: flex;
      gap: 2rem;

      button {
        border: transparent;
        border-radius: var(--radius-4);
        background-color: var(--color-grey-3);
        color: var(--color-grey-0);

        :hover {
          background-color: var(--color-grey-2);
        }
      }
    }
  }
`;