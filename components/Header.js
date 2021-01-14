import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
    <View style={styles.header}>
        <Text style={styles.titleText}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80dfed',
        paddingVertical: 50
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    }
});


export default Header;
