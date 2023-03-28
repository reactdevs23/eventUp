import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 1116px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "1116px")};
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    width: 90%;
  }
`;

export const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 126%;
  color: #0f1017;
  color: ${({ color }) => (color ? color : "#0f1017")};
  @media only screen and (max-width: 520px) {
    font-size: 28px;
  }
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  font-size: 20px;
  line-height: 170%;
  color: ${({ color }) => (color ? color : "#57585d")};
  @media only screen and (max-width: 520px) {
    font-size: 16px;
  }
`;
export const SubText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: ${({ color }) => (color ? color : "ffffff")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
`;
