import React from "react";
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
type Iprops = {
  data: CardReviewType;
};

const CardReview = ({ data }: any) => {
  return (
    <ContainerItem>
      <AvatarContainer>
        <AvatarImage source={require("./author.png")} />
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
  return (
    <View>
      <ContainerReview
        contentContainerStyle={{
          gap: 20,
          marginTop: 10,
        }}
        data={dataReview}
        renderItem={(item) => (
          <View>
            <CardReview data={item.item} />
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
        numColumns={1}
      />
    </View>
  );
};

export default Review;
