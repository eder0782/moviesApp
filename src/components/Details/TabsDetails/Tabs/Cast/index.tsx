import { Text, View } from "react-native";
import { api } from "../../../../../services/api";
import { CastType } from "../../../../../@types/types";
import { MovieContext } from "../../../../../utilites/context/MovieContext";
import { useContext, useEffect, useState } from "react";
import {
  ContainerActor,
  ContainerCast,
  ImageActor,
  NameActor,
} from "./Cast.style";

interface IProps {
  data: CastType;
}

const CardActor = (props: any) => {
  return (
    <ContainerActor>
      {props.data.profile_path ? (
        <ImageActor
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.data.profile_path}`,
          }}
        />
      ) : (
        <ImageActor source={require("../../../../../assets/person.png")} />
      )}

      <NameActor>{props.data.name}</NameActor>
    </ContainerActor>
  );
};

const Cast: React.FC = () => {
  const [cast, setCast] = useState<CastType[]>([]);
  const { movie } = useContext(MovieContext);
  const getCast = async () => {
    const response = await api.get(`/movie/${movie.id}/credits`);

    setCast(response.data.cast);
  };
  useEffect(() => {
    getCast();
  }, []);
  return (
    <ContainerCast
      data={cast}
      showsVerticalScrollIndicator={false}
      renderItem={(item) => (
        <View style={{ flexDirection: "column", margin: 1 }}>
          <CardActor data={item.item} />
        </View>
      )}
      key={"#"}
      keyExtractor={(item, index) => "#" + item.name}
      numColumns={2}
      style={{
        marginBottom: 50,
      }}
    >
      <Text style={{ color: "#fff" }}>LISTA DE ATORES</Text>
    </ContainerCast>
  );
};

export default Cast;
