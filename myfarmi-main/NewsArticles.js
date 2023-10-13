import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


  const newsArticles = [
    {
      title: 'Farmers Expo 2023',
      description: 'Join us at the Farmers Expo 2023 to explore the latest innovations in agriculture.',
      imageURL: 'https://www.farminguk.com/images/events/Showsandevents-EYNAHJ6IFU1B.png',
    },
    {
      title: 'New Organic Fertilizer',
      description: 'Introducing our new organic fertilizer that boosts crop yield and soil health.',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9bm3cKF_uy188H9ad8H1e3N76GKcZNU4QA&usqp=CAU',
    },
    {
      title: 'Pest Management Workshop',
      description: 'Learn effective pest management techniques at our upcoming workshop.',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAkygjSJLEfVoKM1Jy7FH_LhKdpwphA71zw&usqp=CAU',
    },
  
    {
      title: 'Harvest Festival Celebration',
      description: 'Join us for the annual Harvest Festival where you can enjoy farm-fresh food and activities for the whole family.',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_Y_LygmRSoXHrcUPhFQxI3jotRDZrN7ydw&usqp=CAU',
    },
  
    {
      title: 'New Irrigation System',
      description: 'Discover our advanced irrigation system that ensures optimal water distribution for your crops.',
      imageURL: 'https://t-news.b-cdn.net/media/5qxlhnib/irrigation-system.png?width=1280&upscale=true',
    },
  
  
    {
      title: 'Healthy Soil Webinar',
      description: 'Participate in our webinar on maintaining healthy soil for sustainable farming practices.',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4h6WiGMqm18pmKEpGEXhO00JMjUQ7ORYMlQ&usqp=CAU',
    },
    // Add more articles here
  ];

const NewsletterScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Live Farm News</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle Farming News button press
          }}
        >
          <Text style={styles.buttonText}>Farming News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle Knowledge Base button press
          }}
        >
          <Text style={styles.buttonText}>Knowledge Base</Text>
        </TouchableOpacity>
      </View>
      {newsArticles.map((article, index) => (
        <View key={index} style={styles.articleContainer}>
          <Image source={{ uri: article.imageURL }} style={styles.articleImage} />
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleDescription}>{article.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#4287f5',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  articleImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: 30,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleDescription: {
    fontSize: 16,
  },
});

export default NewsletterScreen;