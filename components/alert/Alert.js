import { Alert } from "react-native"

const createAlert = (props) => {
    const { title, message, options } = props;

    return Alert.alert(
        title,
        message,
        options
    )
}

export { createAlert }