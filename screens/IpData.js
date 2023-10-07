import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

function IpData({ route, navigation }) {
  const data = route.params.data;

  if (data) {
    return (
      <ScrollView style={styles.form}>
        <Text style={styles.bigLabel}>IP: {data.ip}</Text>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: data.country_flag,
            }}
          />
        </View>
        <Text style={styles.label}>Continent: {data.continent_name}</Text>
        <Text style={styles.label}>Country: {data.country_name}</Text>
        <Text style={styles.label}>State: {data.state_prov}</Text>
        <Text style={styles.label}>City: {data.city}</Text>
        <Text style={styles.label}>Curency: {data.currency.code}</Text>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={styles.form}>
        <Text style={styles.bigLabel}>Error</Text>
      </ScrollView>
    );
  }
}

export default IpData;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    textAlign: "center",
    width: 95,
    height: 50,
  },
  label: {
    fontSize: 20,
  },
  bigLabel: {
    textAlign: "center",
    fontSize: 30,
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
