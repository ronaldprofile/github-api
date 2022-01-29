import styled from "styled-components";
import githubBackground from "../../images/github-background.svg";

export const Container = styled.div``;

export const Wrapper = styled.div`
  max-width: 714px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 40px 0 100px 0;
  position: relative;
`;

export const Main = styled.main``;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 52px;
  color: var(--text);
`;

export const GithubBackground = styled.div`
  height: 100%;
  width: 688px;
  position: absolute;
  top: -40px;
  left: 512px;
  z-index: -1;
  opacity: 0.05;

  background: url(${githubBackground}) no-repeat center;
`;

export const Form = styled.form`
  margin-bottom: 120px;
  .group {
    display: flex;
    align-items: center;

    input {
      padding: 24px 30px;
      width: 100%;
      height: 100%;

      font-size: 20px;
      border: 0;
      border-radius: 5px 0 0 5px;
    }

    button {
      height: 100%;

      padding: 24px 30px;
      font-size: 20px;
      font-weight: bold;
      border: 0;
      border-radius: 0px 5px 5px 0px;
      background: var(--green);
      color: #fff;
      transition: 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const SectionUsers = styled.section`
  padding-bottom: 4rem;
`;

export const ListUsers = styled.ul``;
