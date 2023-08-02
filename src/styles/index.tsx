import styled from "styled-components/native";
import Constants from "expo-constants";

export const ViewContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #242a32;
  padding-left: 15px;
  padding-right: 15px;
  /* align-items: center;
  justify-content: center; */
  /* padding-top: ${Constants.statusBarHeight + "px"}; */
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const SearshInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: "#67686D",
}))`
  background-color: #3a3f47;
  margin-top: 10px;
  height: 42px;
  border-radius: 16px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${(props) => props.theme.Color.primary};
  font-size: 17px;
  /* ::placeholder {
    color: red;
  } */
`;

export const ImageMovie = styled.Image`
  border-radius: 16px;
  margin-right: 20px;
`;
