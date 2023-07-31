import styled from "styled-components/native";

export const ViewContainer = styled.View`
  flex: 1;
  background-color: #242a32;
  padding-left: 30px;
  padding-right: 30px;
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
  color: #fff;
  font-size: 17px;
  /* ::placeholder {
    color: red;
  } */
`;

export const CardMovie = styled.Image`
  height: 210px;
  width: 144px;
  border-radius: 16px;
  margin-right: 20px;
`;

// export const PlacreHolderTextColor = "#67686D";
