import { Alert } from "react-native"

const createAlert = (title, message, text, callback) => {
    return Alert.alert(
        title,
        message,
        [
            {
                text: text,
                onPress: callback
            }
        ]
    )
}

export { createAlert }