import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [text, setText] = useState<string>("This is the default text.");
  const [fetchText, setFetchText] = useState<string>(
    "This is the default fetch text.",
  );

  const updateText = () => setText("The text has changed!");

  const fetchData = async () => {
    const response = await fetch("http://localhost:8081/hello", {
      method: "GET",
    });
    const data = await response.text();
    setFetchText(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{text}</Text>
      <Button title="Click here" onPress={updateText} />
      <Text>{fetchText}</Text>
      <Button title="Fetch" onPress={fetchData} />
    </View>
  );
}
