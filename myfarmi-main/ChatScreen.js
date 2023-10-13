import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#969292',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') {
      return;
    }

    const newMessage = { content: inputMessage, type: 'user' };
    let botResponse = '';

    const lowerCaseInput = inputMessage.toLowerCase();

    if (lowerCaseInput.includes('help')) {
      botResponse = "Sure, I can help you with your farm. What do you need assistance with?";
    } else if (lowerCaseInput.includes('crop')) {
      botResponse = "Yes, I can help you with your crop-related questions.";
    } else if (lowerCaseInput.includes('water') && lowerCaseInput.includes('plants')) {
      botResponse =
        "The current temperature is 34°C and humidity is 46%. The best time to start watering your plants would be around 3:00pm, and you can water them until 4:30pm. Make sure to water them with a total of 450 liters.";
    } else if (lowerCaseInput.includes('best time to plant')) {
      botResponse =
        "To find the best time to plant a specific crop, you can navigate through the app's recommendations. The app will guide you on selecting the right crop and provide a calendar feature to suggest planting dates.";
    } else if (lowerCaseInput.includes('suitable for this crop')) {
      botResponse =
        "The type of soil that is most suitable for a specific crop depends on the crop's preferences for factors such as drainage, nutrient content, pH level, and texture. Different crops thrive in different soil conditions. Here are some general guidelines for soil types that are suitable for common crop categories:\n\nSandy Soil:\n- Crops that prefer well-draining soil, such as carrots, radishes, and lettuce, can do well in sandy soil.\n- Root crops like potatoes and sweet potatoes may also thrive in sandy soil.\n\nLoam Soil:\n- Loam soil, a balanced mixture of sand, silt, and clay, is considered ideal for many crops due to its good drainage and water-holding capacity.\n- Most vegetables, including tomatoes, peppers, corn, and beans, can perform well in loam soil.\n\nClay Soil:\n- Crops that can tolerate heavier, slower-draining soil include cabbage, broccoli, and kale.\n- Root crops like beets and turnips may also grow well in clay soil.\n\nSilt Soil:\n- Silt soil, with its fine particles, holds water well and is suitable for moisture-loving crops like rice or watermelon.\n- It can also work for crops that benefit from good water retention, such as soybeans.\n\nAcidic Soil:\n- Crops like blueberries, cranberries, and rhubarb thrive in acidic soil (lower pH levels).\n\nAlkaline Soil:\n- Some crops, like asparagus and celery, can tolerate slightly alkaline soil (higher pH levels).\n\nWell-Drained Soil:\n- Crops that are sensitive to excess moisture, such as herbs like rosemary and thyme, benefit from well-drained soil.\n\nCompacted Soil:\n- Deep-rooted crops like carrots and parsnips may struggle in compacted soil, so it's essential to improve soil structure.";
    } 
    else if (lowerCaseInput.includes('వ్యవసాయం ఏమిటి?')) {
      botResponse =
        " వ్యవసాయం మానవ జీవనానికి ఆహారం, ఫైబర్, మందు పూలు, మరియు మరియు ఇతర ఉత్పత్తులను ఉత్పత్తించడానికి పంపడం, పశుపాలన ప్రణాళికలను అనుసరించడం ఒక అభ్యాసం.";
    }
    else if (lowerCaseInput.includes('ఫసలు ఏమిటి?')) {
      botResponse =
" ఫసలు వివిధ ఉద్దేశాలకు యింకాలు మరియు ఆకులను వేసి పంటించడం, అవిన్యాసమైన కార్యాలకు మరియు మరియు ప్రాణులు వేసి పెంపడానికి ప్రత్యేకమైన ప్రదేశాలకు యింకలు."    } 
    else if (lowerCaseInput.includes(' పశుపాలన వ్యవసాయం ఏమిటి?')) {
      botResponse =
" పశుపాలన వివిధ ఉద్దేశాలకు జన్మించే పశువులను రక్షించడంలో పాలన ప్రణాళిక. మాంసం, పాలు, ముట్టుండు మరియు ఇతర ఉత్పత్తులకు వివిధ పశువులను పెంపడంలో పశుపాలన ప్రణాళిక ఉంది."    } 
    else if (lowerCaseInput.includes(' వ్యవసాయం ఏమిటి?')) {
      botResponse =
        " వ్యవసాయం మానవ జీవనానికి ఆహారం, ఫైబర్, మందు పూలు, మరియు మరియు ఇతర ఉత్పత్తులను ఉత్పత్తించడానికి పంపడం, పశుపాలన ప్రణాళికలను అనుసరించడం ఒక అభ్యాసం.";
    }  
    else if (lowerCaseInput.includes(' భూమి సిద్ధం ఏమిటి?')) {
      botResponse =
        " భూమి సిద్ధం ఫసలు వేసే కొద్దిబాటులు మీద భూమిని ప్రస్తుత స్థితికి సిద్ధం చేయడానికి చేస్తుంది. ఇది మంచి భూమి గుణం పెంపడానికి ప్లవింగ్, టిలింగ్, మరియు శోధనలను ఉంచడానికి ఉపయోగిస్తుంది.";
    }  

    else if (lowerCaseInput.includes(' ట్రాక్టర్ మరియు ఇతర యంత్రాలు వ్యవసాయంలో ఎలా సహాయపడుతాయి?')) {
      botResponse =
" ట్రాక్టర్ మరియు ఇతర యంత్రాలు హల్, వేసుకొనివేసి, వేయించడం మరియు కటాక్షణ విధులను ఆటోమేట్ చేసుకోవడంలో రూపాంతరాలు చేస్తాయి, ఇది ఈ ప్రక్రియలను ఆర్థికంగా మరియు శ్రమ క్షేత్రానికి కనిష్ట చేస్తుంది."    } 

else if (lowerCaseInput.includes('खेती क्या है?')) {
  botResponse =
"उत्तर: खेती उपजाऊ फसलों की खेती करने और पशुपालन करने का प्रथा है जिससे खाद्य, फाइबर, औषधीय पौधों और अन्य उत्पादों की आवश्यकता को पूरा किया जा सकता है जो मानव जीवन को सुस्त रखने के लिए उपयोग होते हैं।"}
    

else if (lowerCaseInput.includes('पशुपालन खेती क्या है?')) {
  botResponse =
"खेती उपजाऊ फसलों की खेती करने और पशुपालन करने का प्रथा है जिससे खाद्य, फाइबर, औषधीय पौधों और अन्य उत्पादों की आवश्यकता को पूरा किया जा सकता है जो मानव जीवन को सुस्त रखने के लिए उपयोग होते हैं।"}
 



else if (lowerCaseInput.includes('खेती क्या है?')) {
  botResponse =
"पशुपालन विभिन्न उद्देश्यों के लिए जानवरों को पालने की प्रक्रिया है, जैसे कि मांस, दूध, अंडे और अन्य उत्पाद। सामान्य पशुओं में गाय, मुर्गी, सूअर और भेड़ शामिल होते हैं।"} 





else if (lowerCaseInput.includes('क्या है जैविक खेती?')) {
  botResponse =
"जैविक खेती एक ऐसी दृष्टिकोण है जो संश्लेषित रसायनों, जीनेटिक योजनाओं (जीएमओ), और कृत्रिम योजनाओं से बचत करता है। इसमें मिट्टी स्वास्थ्य और पारिस्थितिकी संतुलन को बनाए रखने के लिए ध्यान देने के प्रति कुशल प्रथाएँ शामिल होती हैं।"
}

else if (lowerCaseInput.includes(' कीट प्रबंधन क्या है और इसे कैसे प्रबंधित किया जाता है?')) {
  botResponse =
"कीट प्रबंधन वे जीव होते हैं जो फसलों या पशुओं को क्षति पहुँचा सकते हैं। कीट प्रबंधन में प्राकृतिक शत्रुओं का उपयोग करना, प्रतिरोधी फसल विविधताओं का प्रस्तावना करना और जरुरत पड़ने पर कीटनाशकों का उपयोग करना शामिल होता है।"}




else if (lowerCaseInput.includes('खेती में सततता क्या है?')) {
  botResponse =
" खेती में सततता वो प्रथाएँ होती हैं जो पर्यावरणीय, आर्थिक और सामाजिक कारकों को ध्यान में रखकर कृषि की दीर्घकालिक संभावनाओं की सुनिश्चितता सुनिश्चित करती है। इसका लक्ष्य संसाधनों की संरक्षण करना और नकारात्मक प्रभावों को कम करना होता है।"}

else if (lowerCaseInput.includes('मौसम खेती पर कैसे प्रभाव डालता है?')) {
  botResponse =
"मौसम खेती में महत्वपूर्ण भूमिका निभाता है। तापमान, वर्षा और सूरज की रोशनी पौधों के विकास, कीटों के व्यवहार और कुल उत्पादन पर प्रभाव डालते हैं।"}
else if (lowerCaseInput.includes('ट्रैक्टर और अन्य मशीनें खेती में कैसे मदद करती हैं?')) {
  botResponse =
"ट्रैक्टर और अन्य मशीनें किसानों की मदद करती हैं, हल, बोना, और कटाई जैसे कार्यों को स्वचालित करके इन प्रक्रियाओं को अधिक कुशल और मनुष्य के प्रति कम मेहनती बनाते हैं।"}
else {
      botResponse = "I'm sorry, I don't have enough information about that because I'am still in training phase.";
    }

    setMessages([...messages, newMessage, { content: botResponse, type: 'bot' }]);
    setInputMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FarmGPT</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text
            style={[
              styles.message,
              item.type === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            {item.content}
          </Text>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default App;