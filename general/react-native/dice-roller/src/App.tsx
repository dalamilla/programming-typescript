/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

function App() {
  const [currentImage, setCurrentImage] = useState(1);

  const diceImages = {
    1: require('./assets/dice_1.png'),
    2: require('./assets/dice_2.png'),
    3: require('./assets/dice_3.png'),
    4: require('./assets/dice_4.png'),
    5: require('./assets/dice_5.png'),
    6: require('./assets/dice_6.png'),
  };

  const rollinDice = () => {
    setCurrentImage(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.dice} source={diceImages[currentImage]} />
      <View style={styles.button}>
        <Button
          title="Roll"
          accessibilityLabel="Rolling Dice"
          color="#e83b59"
          onPress={rollinDice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    paddingTop: 10,
    width: 100,
    height: 50,
  },
});

export default App;
