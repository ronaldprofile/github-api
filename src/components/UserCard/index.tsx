import arrowRight from "../../images/arrow-right.svg";
import { Link } from "react-router-dom";
import { Container, Avatar, ProfileInfo } from "./styles";

interface UserCardProps {
  username: string;
  name: string;
  description: string;
  avatar: string;
}

export function UserCard({
  name,
  username,
  avatar,
  description
}: UserCardProps) {
  return (
    <Container>
      <Link to={`/profile/${username}`}>
        <div>
          <Avatar>
            <img src={avatar} alt={name} />
          </Avatar>

          <ProfileInfo>
            <strong>{username}</strong>
            <p>{description}</p>
          </ProfileInfo>
        </div>

        <img src={arrowRight} alt="arrow right" />
      </Link>
    </Container>
  );
}
