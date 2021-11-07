import { FormEvent, useState } from "react";
import { SiGithub } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";

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
  id: number;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
}

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Preencha o campo abaixo");

      return;
    }

    getDataFromApi();
    setInputValue("");
  }

  async function getDataFromApi() {
    try {
      const response = await axios.get<IUser>(
        `https://api.github.com/users/${inputValue}`
      );

      const { login, name, avatar_url, bio, id } = response.data;

      const newUser = {
        id,
        login,
        name,
        avatar_url,
        bio
      };

      setUsers([...users, newUser]);
      toast.success("Usuário encontrado");
    } catch (error) {
      toast.error("Opps! Não encontramos nenhum usuário");
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
          {users.length > 0 &&
            users.map(user => {
              return (
                <UserCard key={user.id}>
                  <div className="credentials">
                    <div>
                      <strong>{user.name}</strong>
                      <span>{user?.login}</span>
                    </div>
                    <img src={user?.avatar_url} alt={user?.login} />
                  </div>

                  <div className="about">
                    <strong>Sobre mim</strong>
                    <p>{user?.bio}</p>
                  </div>
                </UserCard>
              );
            })}
          {users.length <= 0 && (
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
      <Toaster />
    </>
  );
}
