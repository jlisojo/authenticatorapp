// Testing git
// Josh Lisojo
// Cool! :)
// Very cool! :p
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  state = { loggedIn: null, uid: null };

  componentDidMount() {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDYzd8TGR3NlBswWS-xMLe9UsMa27-IxBc",
      authDomain: "auth-6f7b9.firebaseapp.com",
      databaseURL: "https://auth-6f7b9.firebaseio.com",
      projectId: "auth-6f7b9",
      storageBucket: "auth-6f7b9.appspot.com",
      messagingSenderId: "556185120581",
      appId: "1:556185120581:web:0aed50c3a58ef30ede182c"
    };

    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if(user) {
        this.setState({ loggedIn: true, uid: user.uid });
      } else {
        this.setState({ loggedIn: false, uid: null });
      }
    });
  }

  createData() {
    const { currentUser } = firebase.auth();
    var dreamId = 200;
    firebase.database().ref(`/users/${currentUser.uid}/dreams`)
      .push({title: "Dream Two", description: "Lets finish this!"});
  }

  readData(user) {
  }

  updateData(dream) {
  }

  deleteData(dream) {
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={this.createData.bind(this)}>
                Create Data
              </Button>
            </CardSection>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header headerText="Authenticator" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
