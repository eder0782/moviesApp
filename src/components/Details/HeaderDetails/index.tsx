import React from "react";
import {
  Container,
  BannerMovie,
  PosterMovie,
  TitleMovie,
  Rating,
  TextRating,
  Icons,
  ContainerDescription,
  TextDescription,
  ContainerDescriptionUnit,
} from "./HeaderDetails.style";
import { View } from "react-native";
import { useContext } from "react";
import { MovieContext } from "../../../utilites/context/MovieContext";

const HeaderDetails: React.FC = () => {
  const { movie } = useContext(MovieContext);
  return (
    <Container>
      <View style={{ height: 260 }}>
        <BannerMovie
          source={{
            uri: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
          }}
        />

        <PosterMovie
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <Rating>
          <Icons source={require("../../../assets/star.png")} />
          <TextRating>{Number(movie.vote_average).toFixed(1)}</TextRating>
        </Rating>
      </View>
      <TitleMovie>{movie.title}</TitleMovie>
      <ContainerDescription>
        <ContainerDescriptionUnit>
          <Icons source={require("../../../assets/calendar.png")} />
          <TextDescription>
            {String(movie.release_date).slice(0, 4)}
          </TextDescription>
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
