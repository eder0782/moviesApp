import { StatusBar } from "expo-status-bar";
import { ViewContainer } from "../../styles";
import { Text } from "react-native";
import HeaderDetails from "../../components/Details/HeaderDetails";
import { View } from "react-native";

const Details: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#242A32" }}>
      <HeaderDetails />
      <StatusBar backgroundColor={"#242A32"} style="light" />
    </View>
  );
};

export default Details;
