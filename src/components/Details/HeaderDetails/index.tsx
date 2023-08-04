import React from "react";
import {
  Container,
  BannerMovie,
  ContainerPoster,
  PosterMovie,
  TitleMovie,
  Rating,
  TextRating,
  Icons,
  ContainerDescription,
  TextDescription,
  ContainerDescriptionUnit,
} from "./HeaderDetails.style";
import { Title } from "../../../styles";
import { View } from "react-native";

const HeaderDetails: React.FC = () => {
  return (
    <Container>
      <View style={{ height: 260 }}>
        <BannerMovie source={require("./image.png")} />

        <PosterMovie source={require("./poster.png")} />
        <Rating>
          <Icons source={require("../../../assets/star.png")} />
          <TextRating>9.5</TextRating>
        </Rating>
      </View>
      <TitleMovie>Spiderman No Way Home</TitleMovie>
      <ContainerDescription>
        <ContainerDescriptionUnit>
          <Icons source={require("../../../assets/calendar.png")} />
          <TextDescription>2021</TextDescription>
        </ContainerDescriptionUnit>
        <TextDescription>|</TextDescription>
        <ContainerDescriptionUnit>
          <Icons source={require("../../../assets/clock.png")} />
          <TextDescription>148 Minutos</TextDescription>
        </ContainerDescriptionUnit>
        <TextDescription>|</TextDescription>
        <ContainerDescriptionUnit>
          <Icons source={require("../../../assets/ticket.png")} />
          <TextDescription>Ação</TextDescription>
        </ContainerDescriptionUnit>
      </ContainerDescription>
    </Container>
  );
};

export default HeaderDetails;
