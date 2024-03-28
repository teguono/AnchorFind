import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

const Header = ({ title }) => {
  return (
    <View
      style={[
        globalStyles.screenContainer,
        { padding: 20, borderBottomWidth: 1, borderColor: "#DAA520" },
      ]}
    >
      <Text style={{ ...globalStyles.titleText, fontSize: 24 }}>{title}</Text>
    </View>
  );
};

export default Header;
