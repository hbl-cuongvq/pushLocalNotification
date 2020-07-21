import React from 'react';
import {View, Text, Button} from 'react-native';
import notifee from '@notifee/react-native';

const App = () => {
  const handlePush = async () => {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
      },
    });
  };

  return (
    <View>
      <Text>PUSH NOTIFICATION</Text>
      <Button title="Press to test" onPress={handlePush} />
    </View>
  );
};

export default App;
