import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  margin: -6rem auto;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #ffffff;

    span {
      color: #010409;
    }
  }

  svg {
    transition: fill 0.2s;

    &:hover {
      fill: #ffffff;
    }
  }
`;

export const Background = styled.div`
  height: 8rem;

  background-color: #3700b3;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  input,
  button {
    font-size: 1rem;
    border-radius: 0.125rem;
  }

  .field {
    display: flex;
    flex: 2;

    input {
      width: 100%;
      padding: 1rem 1.5rem;
      border: 0.0625rem solid #e4e4e4;
      outline: none;
    }
  }

  button {
    padding: 1rem 1.5rem;
    flex: 1;
    background-color: #6200ee;
    color: #fff;

    font-weight: 700;
    border: 0;
    border: 0.0625rem solid #6200ee;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const ShowUser = styled.div`
  margin-top: 3.125rem;
`;

export const UserCard = styled.div`
  width: 100%;
  padding: 2rem;
  position: relative;
  background-color: #ffffff;

  border-radius: 0.0625rem;

  &::before {
    content: "";
    height: 0.125rem;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;

    background-color: #3700b3;
    transition: width 0.2s;
  }

  &:hover::before {
    width: 100%;
  }

  .credentials {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    span {
      font-size: 1.5rem;
      order: 1;
    }

    img {
      width: 5rem;
      height: 5rem;

      clip-path: circle();
      object-fit: cover;
    }
  }

  .about {
    margin-top: 1rem;

    strong {
      font-size: 1.25rem;
    }

    p {
      margin-top: 0.5rem;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 0.75rem;
    font-size: 1.25rem;
    text-align: center;
  }
`;
