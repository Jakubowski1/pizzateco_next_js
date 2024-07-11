import styled from "styled-components";

export const Box = styled.li`
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: hidden;
  width: 420px;
  height: 588px;
  margin: 20px 40px 0px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  text-align: left;
  justify-content: space-between;
  border-top: 1px solid #000000;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 0;
  margin-bottom: 10px;
  color: #333;
  font-family: "Just Me Again Down Here", cursive;
  font-weight: 400;
  font-style: normal;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  gap: 10px;
`;

export const Tag = styled.span`
  color: #ff9900;
  padding: 2px 20px;
  border: 1px solid #ff9900;
  border-radius: 10px;
  font-size: 16px;
`;
export const Tag1 = styled.span`
  color: #244fe9;
  padding: 2px 20px;
  border: 1px solid #244fe9;
  border-radius: 10px;
  font-size: 16px;
`;
export const Tag2 = styled.span`
  color: #d20c0c;
  padding: 2px 20px;
  border: 1px solid #d20c0c;
  border-radius: 10px;
  font-size: 16px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoItem = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Icon = styled.span`
  margin-right: 5px;
`;

export const Difficulty = styled.div`
  background: ${(props) => props.color[0] || "#ccc"};
  color: ${(props) => props.color[1] || "#ccc"};
  padding: 4px 20px;
  border: 1px solid ${(props) => props.color[1]};
  border-radius: 10px;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  width: fit-content;
`;
