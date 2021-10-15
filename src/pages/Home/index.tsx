import { FormEvent, useState } from "react";
import { SiGithub } from "react-icons/si";
import githubIllustration from "../../images/github-no-users.svg";
import axios from "axios";
import {
  Background,
  Container,
  Header,
  Form,
  ShowUser,
  UserCard,
  Message
} from "./styles";

interface IUser {
  login: string;
  biography: string;
  avatar_url: string;
}

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState<IUser>();

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      alert("Preencha o campo abaixo");

      return;
    }

    getDataFromApi();
    setInputValue("");
  }

  async function getDataFromApi() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );

      const { name, avatar_url, bio } = response.data;

      setUser({
        login: name,
        avatar_url: avatar_url,
        biography: bio
      });
    } catch (error) {
      alert("Opps! Não encontramos nenhum usuário");
    }
  }

  return (
    <>
      <Background />

      <Container>
        <Header>
          <h1>
            Github<span>API.</span>
          </h1>

          <SiGithub size="38" />
        </Header>

        <Form onSubmit={handleSubmitForm}>
          <div className="field">
            <label htmlFor="name-user" className="sr-only">
              Buscar usuário
            </label>
            <input
              type="text"
              name="name-user"
              placeholder="Buscar usuário"
              autoFocus
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
          </div>

          <button>Encontrar</button>
        </Form>

        <ShowUser>
          {user ? (
            <UserCard>
              <div className="credentials">
                <span>{user?.login}</span>
                <img src={user?.avatar_url} alt={user?.login} />
              </div>

              <div className="about">
                <strong>Sobre mim</strong>
                <p>{user?.biography}</p>
              </div>
            </UserCard>
          ) : (
            <Message>
              <img src={githubIllustration} alt="github illustration" />
              <p>
                Nenhum usuário por aqui...
                <br />
                Comece fazendo uma pesquisa.
              </p>
            </Message>
          )}
        </ShowUser>
      </Container>
    </>
  );
}
