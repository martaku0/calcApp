import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Dimensions } from 'react-native';

export default function MyButton(props) {

    const {op, style, txtStyle, func} = props

    return (
        <Pressable style={style} onPress={()=>{func(op)}}>
            <Text style={txtStyle}>{op}</Text>
        </Pressable>
    );
}

