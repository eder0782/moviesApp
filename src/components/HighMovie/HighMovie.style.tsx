import styled from "styled-components/native";

export const ContainerScroll = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    marginTop: 20,
    // backgroundColor: "blue",
    // height: 250,
  },
  horizontal: true,
}))`
  height: 250px;
`;

export const TextNumber = styled.Text`
  font-size: 96px;
  position: absolute;
  left: -6px;
  bottom: -20px;
  color: #0296e5;
  opacity: 0.6;
  font-weight: 700;
`;
