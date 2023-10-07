import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../UI/Button";
import GetIpGeolocation, {
  GetIpData,
} from "../../services/IpGeolocationService";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

function IpForm() {
  const [enteredIp, setEnteredIp] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("ipgeolocation");
  const [items, setItems] = useState([
    { label: "app.ipgeolocation.io", value: "ipgeolocation" },
    { label: "ip-api.com", value: "ip-api" },
  ]);

  const navigation = useNavigation();

  function changeIpHandler(enteredText) {
    setEnteredIp(enteredText);
  }

  function getIpHandler() {
    if (value == "ipgeolocation") {
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
      <Text style={styles.label}>Input Ip</Text>
      <TextInput style={styles.input} onChangeText={changeIpHandler} />
      <Text style={styles.label}>Select The Service</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
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
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderColor: "gray",
    borderWidth: 2,
  },
});
