import { useParams } from "react-router-dom";
import { Container, Info, Avatar, Bio, MoreInfos, Box } from "./styles";

interface ProfileProps {
  name: string;
  username: string;
  description: string;
  avatar: string;
}

export function Profile() {
  const { username } = useParams();

  return (
    <Container>
      <Info>
        <Avatar>
          <img
            src={"https://github.com/ronaldprofile.png"}
            alt={"Ronald Tomaz"}
          />
        </Avatar>

        <Bio>
          <strong>{"ronaldprofile"}</strong>
          <p>{"Developer Frontend React JS."}</p>
        </Bio>
      </Info>

      <MoreInfos>
        <Box>
          <strong>38</strong>
          <span>Followers</span>
        </Box>
        <Box>
          <strong>52</strong>
          <span>Following</span>
        </Box>
        <Box>
          <strong>15</strong>
          <span>Stars</span>
        </Box>
        <Box>
          <strong>37</strong>
          <span>Repos</span>
        </Box>
      </MoreInfos>
    </Container>
  );
}
