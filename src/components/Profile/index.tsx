import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Info, Avatar, Bio, MoreInfos, Box } from "./styles";

interface IUser {
  id: number;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;

  followers: number;
  following: number;
}

interface ProfileProps {
  totalRepositories: number;
}

export function Profile({ totalRepositories }: ProfileProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const { username } = useParams();

  async function getData() {
    try {
      const response = await api.get<IUser>(`${username}`);
      const data = response.data as IUser;

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Info>
        <Avatar>
          <img src={user?.avatar_url} alt={user?.name} />
        </Avatar>

        <Bio>
          <strong>{user?.login}</strong>
          <p>{user?.bio}</p>
        </Bio>
      </Info>

      <MoreInfos>
        <Box>
          <strong>{user?.followers}</strong>
          <span>Followers</span>
        </Box>

        <Box>
          <strong>{user?.following}</strong>
          <span>Following</span>
        </Box>

        <Box>
          <strong>{totalRepositories}</strong>
          <span>Repos</span>
        </Box>
      </MoreInfos>
    </Container>
  );
}
