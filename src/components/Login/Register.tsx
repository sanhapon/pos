import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RegisterInfo } from './Credential';

export class Register extends React.Component<any, RegisterInfo> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Regisration Form</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a75ff',
    },
});