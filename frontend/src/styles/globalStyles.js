import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF", // White background for all screens
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000", // Black color for screen titles
    padding: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 1, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF", // White color for button text
  },
  buttonContainer: {
    backgroundColor: "#DAA520", // Gold color for buttons
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DAA520", // Gold border color for inputs
    backgroundColor: "#FFFFFF", // White background for input fields
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    color: "#000", // Black color for input text
  },
  hyperlinkText: {
    fontSize: 16,
    color: "#DAA520", // Gold color for hyperlinks
    fontWeight: "bold",
  },
});

export default globalStyles;
