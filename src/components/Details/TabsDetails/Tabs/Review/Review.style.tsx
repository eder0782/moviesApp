import styled from "styled-components/native";

export const ContainerReview = styled.FlatList``;

export const ContainerItem = styled.View`
  /* height: 110px; */
  width: 100%;
  flex-direction: row;
  flex: 1;
  margin-bottom: 20%;
`;

export const AvatarContainer = styled.View`
  height: 100%;
  width: 20%;
  align-items: center;
  gap: 10px;
`;
export const TextContainer = styled.View`
  height: 100%;
  width: 80%;
  gap: 10px;
`;

export const TextRating = styled.Text`
  color: #0296e5;
  font-size: 15px;
  font-weight: 600;
`;

export const TextReview = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`;
export const AvatarImage = styled.Image.attrs((props) => ({
  resizeMode: "contain",
}))`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
