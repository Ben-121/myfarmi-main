import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const LanguageSelector = ({ selectedLanguage, changeLanguage }) => {
  return (
    <View style={styles.languageSelectorContainer}>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'en' && styles.selectedLanguage,
        ]}
        onPress={() => changeLanguage('en')}>
        <Text style={styles.languageButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'hi' && styles.selectedLanguage,
        ]}
        onPress={() => changeLanguage('hi')}>
        <Text style={styles.languageButtonText}>हिन्दी</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'te' && styles.selectedLanguage,
        ]}
        onPress={() => changeLanguage('te')}>
        <Text style={styles.languageButtonText}>తెలుగు</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  languageSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  languageButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  selectedLanguage: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  languageButtonText: {
    fontSize: 14,
    color: 'black', // Adjust the text color as needed
  },
});

export default LanguageSelector;
