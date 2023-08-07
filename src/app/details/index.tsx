import { StatusBar } from "expo-status-bar";

import HeaderDetails from "../../components/Details/HeaderDetails";
import { View } from "react-native";
import TabDetails from "../../components/Details/TabsDetails";

const Details: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#242A32" }}>
      <HeaderDetails />
      <TabDetails />
      <StatusBar backgroundColor={"#242A32"} style="light" />
    </View>
  );
};

export default Details;
