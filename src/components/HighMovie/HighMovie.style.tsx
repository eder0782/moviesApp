import styled from "styled-components/native";

export const ContainerScroll = styled.ScrollView.attrs((props) => ({
  showsHorizontalScrollIndicator: false,
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
  left: -15px;
  bottom: -20px;
  color: #67686d;
  opacity: 0.6;
  font-weight: 700;
`;
