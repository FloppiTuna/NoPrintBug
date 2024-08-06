import { Button, Text, View } from "react-native";
import { hello } from "@/modules/logtest"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Test Logging" onPress={() => {
        console.log('Message from TypeScript...')
        hello()
      }}>
      </Button>
    </View>
  );
}
