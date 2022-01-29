import styled from "styled-components";

export const Container = styled.div``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Avatar = styled.div`
  img {
    width: 120px;
    height: 120px;
    clip-path: circle();
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  strong {
    font-size: 36px;
    color: var(--gray-700);
  }

  p {
    font-size: 20px;
    color: var(--gray-400);
  }
`;

export const MoreInfos = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-size: 36px;
    color: var(--gray-700);
  }

  span {
    font-size: 20px;
    color: #6c6c80;
  }
`;
