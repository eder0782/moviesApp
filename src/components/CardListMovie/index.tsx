import { FlatList, Text, View } from "react-native";
import { Movie } from "./typeCards";
import { memo } from "react";

const CardListMovie = (data: Movie[], getMovie: () => void) => {
  return;
  <>
    <FlatList
      data={data}
      numColumns={3}
      removeClippedSubviews
      renderItem={(item) => (
        <View
          style={{
            padding: 25,
            width: "100%",

            marginRight: 100,
            marginBottom: 10,
            backgroundColor: "gray",
            flexDirection: "column",

            // justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
            {item.item.title}
          </Text>
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700" }}>
            Nota: {item.item.vote_average}
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        // flex: 1,
        padding: 35,
        paddingBottom: 100,
      }}
      onEndReached={() => getMovie()}
      onEndReachedThreshold={0.5}
    />
  </>;
};

export default CardListMovie;
