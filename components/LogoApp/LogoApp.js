import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import animationLibrary from '../../lib/animationConfig';
import AnimatedViewWrapper from '../Wrappers/AnimatedViewWrapper';

const enterTransition = animationLibrary.Stretch.entering;
const exitTransition = animationLibrary.Stretch.exiting;

const LogoApp = () => {


    return (
        <AnimatedViewWrapper keyId={'logoAppView'} entering={enterTransition.delay(100)} exiting={exitTransition}>

            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoCircle}>
                        <Text style={styles.logoCircleText}>H</Text>
                    </View>
                    <View style={styles.logoTextContainer}>
                        <Text style={styles.logoText}>{process.env.EXPO_PUBLIC_PROJECT_NAME || 'LIBERO'}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.logoTextRed}>({process.env.EXPO_PUBLIC_PROJECT_NAME_RED || 'fuga'})</Text>
                            <Text style={styles.logoTextRedSup}>{process.env.EXPO_PUBLIC_PROJECT_NAME_EDITION || 'ipsum'}</Text>
                        </View>
                    </View>
                </View>
            </View>

        </AnimatedViewWrapper>

    );
};

export default LogoApp;


const styles = StyleSheet.create({
    logoContainer: {
        width: 210,
        alignItems: 'center',
    },
    logoCircle: {
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 90,
        padding: 0,
        width: 135,
        height: 135,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    logoCircleText: {
        color: '#FFF',
        fontSize: 64
    },
    logoTextContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        color: '#FFF',
        fontSize: 34
    },
    logoTextRed: {
        color: '#ba0b23',
        fontWeight: '600'

    },
    logoTextRedSup: {
        color: '#ba0b23',
    },

})