import styled from "styled-components/native";

export const ContainerCast = styled.FlatList.attrs((props) => ({
  contentContainerStyle: {
    // flex: 1,
    // gap: 20,
    // marginTop: 10,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 200,
  },
}))``;

export const ContainerActor = styled.View`
  height: 123px;
  width: 120px;
  align-items: center;
  margin-left: 17%;
  margin-bottom: 20%;
`;

export const ImageActor = styled.Image.attrs((props) => ({
  resizeMode: "contain",
}))`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const NameActor = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;
