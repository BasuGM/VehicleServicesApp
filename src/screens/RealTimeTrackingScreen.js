import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const RealTimeTrackingScreen = () => (
    <View style={styles.container}>
        <Text>RealTimeTrackingScreen</Text>
    </View>
    )
export default RealTimeTrackingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});