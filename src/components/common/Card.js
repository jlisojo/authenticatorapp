import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View behavior={"padding"} style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // elevation: 5,
    marginLeft: 5,
    marginRight: 5
    // marginTop: 10
  }
};

export { Card };
