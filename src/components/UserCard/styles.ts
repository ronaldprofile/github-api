import styled from "styled-components";

export const Container = styled.li`
  & + li {
    margin-top: 1rem;
  }

  transition: 0.2s;
  &:hover {
    transform: translateY(-3px);
  }

  a {
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 5px;

    > div {
      display: flex;
      align-items: center;
      gap: 22px;
    }
  }
`;

export const Avatar = styled.div`
  img {
    width: 83px;
    height: 83px;

    clip-path: circle();
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-size: 1.5rem;
    color: var(--gray-700);
  }

  p {
    font-size: 1.125rem;
    color: var(--gray-500);
  }
`;
