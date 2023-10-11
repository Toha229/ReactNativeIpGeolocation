import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Button from "../components/UI/Button";
import { GetUserIp } from "../services/IpGeolocationService";

function SelectService() {
  const [userIp, setUserIp] = useState("");

  const navigation = useNavigation();

  function navigateTo(service) {
    navigation.navigate("IpGeolocation", {
      service: service,
    });
  }

  useEffect(() => {
    GetUserIp(setUserIp);
  });

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.bigLabel}>Select the Service</Text>
      <Button
        onPress={() => {
          navigateTo("ip-api");
        }}
      >
        IP-API
      </Button>
      <Button
        onPress={() => {
          navigateTo("ipgeolocation");
        }}
      >
        Ip Geolocation API
      </Button>
      <View style={styles.ipData}>
        <Text style={styles.ipLabel}>Your Ip:</Text>
        <Text style={styles.ipLabel}>{userIp}</Text>
      </View>
    </ScrollView>
  );
}

export default SelectService;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    width: 95,
    height: 50,
  },
  label: {
    fontSize: 20,
  },
  bigLabel: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
  ipLabel: {
    color: "#5A5A5A",
    textAlign: "center",
    fontSize: 25,
  },
  ipData: {
    marginTop: 50,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderColor: "gray",
    borderWidth: 2,
  },
});
