import { Text, View, StyleSheet } from 'react-native'

export default class aboutScreen {
  render() {
    return (
      <View style={styles.container}
      >
        <Text>about</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"gray",
    }
})