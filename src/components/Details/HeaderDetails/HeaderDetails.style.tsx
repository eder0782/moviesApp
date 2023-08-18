import styled from "styled-components/native";

export const Container = styled.View`
  /* background-color: red; */
  /* height: 350px; */
`;

export const BannerMovie = styled.Image`
  /* margin-top: 30px; */
  border-radius: 0px 0px 16px 16px;
  height: 240px;
  width: 100%;
`;

export const PosterMovie = styled.Image`
  height: 155px;
  width: 110px;
  border-radius: 16px;
  /* transform: translate(-100%, 50%); */
  transform: translateY(-70px);
  margin-left: 8%;
  /* transform: translateX(-50px); */
`;

export const TitleMovie = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  padding-left: 40%;
  padding-right: 10%;
`;

export const Rating = styled.View`
  background-color: #252836;
  height: 34px;
  width: 64px;
  opacity: 0.9;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  transform: translateY(-200px);
  margin-left: 80%;
  flex-direction: row;
`;

export const TextRating = styled.Text`
  font-size: 18px;
  color: #ff8700;
  font-weight: bold;
`;

export const Icons = styled.Image`
  height: 18px;
  width: 18px;
  margin-right: 5px;
`;

export const TextDescription = styled.Text`
  color: #92929d;
  font-size: 16px;
  font-weight: 600;
`;

export const ContainerDescription = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 40px;
  flex-direction: row;
`;

export const ContainerDescriptionUnit = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
`;
