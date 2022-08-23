import React from "react";
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class SearchInput extends React.Component {
    handleChangeText = (newLocation) => {
        this.props.location = newLocation;
    }

    render() {
        return (
            <TextInput
                autoCorrect={false}
                placeholder={this.props.placeholder}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                clearButtonMode="always"
                onChangeText={this.handleChangeText}
            />
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
})