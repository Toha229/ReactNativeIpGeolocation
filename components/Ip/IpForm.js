import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../UI/Button";
import {
  GetIpGeolocation,
  GetIpData,
  GetUserIp,
} from "../../services/IpGeolocationService";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

function IpForm({ route }) {
  const [enteredIp, setEnteredIp] = useState("");
  const [userIp, setUserIp] = useState("");

  const service = route.params.service;

  // const [value, setValue] = useState("ipgeolocation");
  // const [open, setOpen] = useState(false);
  // const [items, setItems] = useState([
  //   { label: "app.ipgeolocation.io", value: "ipgeolocation" },
  //   { label: "ip-api.com", value: "ip-api" },
  // ]);

  const navigation = useNavigation();

  useEffect(() => {
    GetUserIp(setUserIp);
  });

  function changeIpHandler(enteredText) {
    setEnteredIp(enteredText);
  }

  function getIpHandler() {
    if (service == "ipgeolocation") {
      GetIpGeolocation(enteredIp, showResult);
    } else {
      GetIpData(enteredIp, showResult);
    }
  }
  function showResult(json) {
    navigation.navigate("IpData", {
      data: json,
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.labelCenter}>Search IP</Text>
      <Text style={styles.labelCenter}>
        With
        {service == "ipgeolocation" ? " Ip Geolocation" : " Ip Api"}
      </Text>

      <Text style={styles.label}>Input Ip</Text>
      <TextInput
        placeholder={userIp}
        style={styles.input}
        onChangeText={changeIpHandler}
      />
      {/* <Text style={styles.label}>Select The Service</Text> */}
      {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      /> */}
      <Button onPress={getIpHandler}>Search</Button>
    </View>
  );
}
export default IpForm;
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  labelCenter: {
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 25,
    textAlign: "center",
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
