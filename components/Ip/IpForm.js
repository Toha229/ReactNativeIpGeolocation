import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../UI/Button";
import GetIpGeolocation from "../../services/IpGeolocationService";
import { useNavigation } from "@react-navigation/native";

function IpForm() {
  const [enteredIp, setEnteredIp] = useState("");
  const [data, setData] = useState();

  const navigation = useNavigation();

  function changeIpHandler(enteredText) {
    setEnteredIp(enteredText);
  }

  function getIpHandler() {
    GetIpGeolocation(enteredIp, showResult);
  }
  function showResult(json) {
    navigation.navigate("IpData", {
      data: json,
    });
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Input Ip</Text>
        <TextInput style={styles.input} onChangeText={changeIpHandler} />
      </View>
      <Button onPress={getIpHandler}>Search</Button>
    </ScrollView>
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
