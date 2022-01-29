import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;

  header {
    padding: 42px 0 80px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      color: var(--gray-400);
    }
  }

  main {
  }
`;
export const SectionRepos = styled.div``;
export const ListRepos = styled.ul`
  margin-top: 80px;
`;
