import React from "react";
import { StyleSheet, Text, View } from "react-native";


function Feed(): React.JSX.Element {



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.feedScreen}>Feed Screen</Text>
        </View>
    );
}

export default Feed;

const styles = StyleSheet.create({
    feedScreen: {
        fontSize: 50,
        color: 'black'
    }
})