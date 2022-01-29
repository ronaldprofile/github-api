import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  padding: 1.75rem 1.5rem;
  background: #ffffff;
  border-radius: 0.312rem;
  transition: 0.2s;
  & + li {
    margin-top: 1rem;
  }

  &:hover {
    transform: translateY(-3px);
  }

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1.5rem;
    color: var(--gray-700);
  }

  span {
    font-size: 1.125rem;
    color: var(--gray-500);
  }
`;
