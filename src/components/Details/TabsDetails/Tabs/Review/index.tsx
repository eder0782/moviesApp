import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CardReviewType } from "../../../../../@types/types";
import {
  AvatarContainer,
  AvatarImage,
  ContainerItem,
  ContainerReview,
  TextContainer,
  TextRating,
  TextReview,
} from "./Review.style";
import { dataReview } from "./data.teste";
import { MovieContext } from "../../../../../utilites/context/MovieContext";
import { api } from "../../../../../services/api";
type Iprops = {
  data: CardReviewType;
};

const CardReview = ({ data }: any) => {
  return (
    <ContainerItem>
      <AvatarContainer>
        {data.author_details.avatar_path ? (
          <AvatarImage
            source={{
              uri: `https://image.tmdb.org/t/p/original/${data.author_details.avatar_path}`,
            }}
          />
        ) : (
          <AvatarImage source={require("../../../../../assets/person.png")} />
        )}

        <TextRating>{data.author_details.rating}</TextRating>
      </AvatarContainer>
      <TextContainer>
        <TextReview>{data.author}</TextReview>
        <TextReview>{data.content}</TextReview>
      </TextContainer>
    </ContainerItem>
  );
};

const Review: React.FC = () => {
  const [review, setReview] = useState<CardReviewType[]>([]);
  const { movie } = useContext(MovieContext);
  const getReview = async () => {
    const response = await api.get(`/movie/${movie.id}/reviews`);

    setReview(response.data.results);
  };
  useEffect(() => {
    getReview();
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      {review.length > 0 ? (
        <ContainerReview
          contentContainerStyle={{
            gap: 20,
            marginTop: 10,
          }}
          data={review}
          renderItem={(item) => (
            <View>
              <CardReview data={item.item} />
            </View>
          )}
          keyExtractor={(item: any) => String(item.id)}
          numColumns={1}
        />
      ) : (
        <View>
          <TextReview>Sem Reviews Disponíveis</TextReview>
        </View>
      )}
    </View>
  );
};

export default Review;
