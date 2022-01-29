import { FormEvent, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../images/logo.svg";

import { UserCard } from "../../components/UserCard";
import {
  Container,
  Form,
  GithubBackground,
  Header,
  ListUsers,
  Main,
  SectionUsers,
  Title,
  Wrapper
} from "./styles";

interface IUser {
  id: number;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
}

export function Home() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  async function getDataFromApi() {
    try {
      const response = await axios.get<IUser>(
        `https://api.github.com/users/${username}`
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

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (username.trim() === "") {
      toast.error("Preencha o campo abaixo");

      return;
    }

    getDataFromApi();
    setUsername("");
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <a href="#">
            <img
              src={logo}
              alt="logo Github Explorer"
              title="Logo Github Explorer"
            />
          </a>
        </Header>

        <Main>
          <Title>
            Explore usuários <br /> no Github.
          </Title>

          <GithubBackground />

          <Form onSubmit={handleSubmitForm}>
            <div className="group">
              <label htmlFor="user" className="sr-only">
                Digite um nome de usuário
              </label>
              <input
                type="text"
                id="user"
                placeholder="Digite aqui"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button>Pesquisar</button>
            </div>
          </Form>

          <SectionUsers>
            <ListUsers>
              {users.map(user => (
                <UserCard
                  key={user.id}
                  name={user.name}
                  username={user.login}
                  description={user.bio}
                  avatar={user.avatar_url}
                />
              ))}
            </ListUsers>
          </SectionUsers>
        </Main>
      </Wrapper>
      <Toaster />
    </Container>
  );
}
