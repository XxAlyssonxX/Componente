import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../css/botaoStyle';
import { router } from 'expo-router';

export default function Botao({btn, cor, src}) {
    const [isPressed, setIsPressed] = useState(false);

    // função para criar o efeito de click e navegar para outra tela
    const handlePress = () => {
    setIsPressed(!isPressed);
    router.navigate(src);
};

return (
    // estrutura para criar o objeto botão
    <TouchableOpacity
    style={[styles.button, { backgroundColor: cor }, isPressed ? styles.buttonPressed : null]}
    onPress={handlePress}
    >
    <Text style={styles.buttonText}>{btn}</Text>
    </TouchableOpacity>

    );
}


