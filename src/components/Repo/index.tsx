import arrowRight from "../../images/arrow-right.svg";
import { Container, RepoInfo } from "./styles";

export function Repo() {
  return (
    <Container>
      <a href="#">
        <RepoInfo>
          <strong>ignite-dtmoney</strong>
          <span>Ronald Tomaz</span>
        </RepoInfo>

        <img src={arrowRight} alt="arrow right" />
      </a>
    </Container>
  );
}
