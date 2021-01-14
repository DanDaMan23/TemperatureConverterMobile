import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => <View style={{...styles.card, ...props.style}}>{props.children}</View>

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        margin: 30,
        borderRadius: 8
    }
});



export default Card;