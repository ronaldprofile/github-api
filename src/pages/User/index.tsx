import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import arrowLeft from "../../images/arrow-left.svg";

import { Container, ListRepos, SectionRepos, Wrapper } from "./styles";
import { Profile } from "../../components/Profile";
import { Repo } from "../../components/Repo";

export function User() {
  return (
    <Container>
      <Wrapper>
        <header>
          <div id="logo">
            <Link to="/">
              <img src={logo} alt="Logo Github Explorer" />
            </Link>
          </div>

          <Link to="/" id="back">
            <img src={arrowLeft} alt="arrow left" />
            <span>Voltar</span>
          </Link>
        </header>

        <main>
          <Profile />

          <SectionRepos>
            <ListRepos>
              <Repo />
            </ListRepos>
          </SectionRepos>
        </main>
      </Wrapper>
    </Container>
  );
}
