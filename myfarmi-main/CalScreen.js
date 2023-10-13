import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
// import i18next from 'i18next';
import "intl-pluralrules";

// Initialize i18next with translations
// i18next.init({
//   interpolation: { escapeValue: false }, // React already does escaping
//   resources: {
//     en: {
//       translation: {
//         cropRotationCalendar: "Crop Rotation Calendar",
//         currentCrop: "Current Crop:",
//         nextRotationDate: "Next Rotation Date:",
//         nextCrop: "Next Crop",
//         addCrop: "Add Crop",
//         addedCrops: "Added Crops",
//         months: "months",
//       },
//     },
//     hi: {
//       translation: {
//         cropRotationCalendar: "फसल रोटेशन कैलेंडर",
//         currentCrop: "वर्तमान फसल:",
//         nextRotationDate: "अगली रोटेशन तिथि:",
//         nextCrop: "अगली फसल",
//         addCrop: "फसल जोड़ें",
//         addedCrops: "जोड़ी गई फसलें",
//         months: "महीने",
//       },
//     },
//     te: {
//       translation: {
//         cropRotationCalendar: "పంట భ్రమణ క్యాలెండర్",
//         currentCrop: "ప్రస్తుత పంట:",
//         nextRotationDate: "తదుపరి రోటేషన్ తేది:",
//         nextCrop: "తదుపరి పంట",
//         addCrop: "పంట జోడించండి",
//         addedCrops: "జోడించబడిన పంట",
//         months: "నెలలు",
//       },
//     },
//   },
// });

const CropRotationCalendar = () => {
  const [currentCropIndex, setCurrentCropIndex] = useState(0);

  const [newCropName, setNewCropName] = useState("");
  const [newCropRotationInterval, setNewCropRotationInterval] = useState("");
  const [addedCrops, setAddedCrops] = useState([]);

  const [cropsData, setCropsData] = useState([
    { id: "1", name: "Wheat", rotationInterval: 2 },
    { id: "2", name: "Corn", rotationInterval: 3 },
    { id: "3", name: "Soybean", rotationInterval: 2 },
    // ... add more crops
  ]);

  const currentCrop = cropsData[currentCropIndex];

  const handleNextCrop = () => {
    const nextIndex = (currentCropIndex + 1) % cropsData.length;
    setCurrentCropIndex(nextIndex);
  };

  const rotationDate = new Date();
  rotationDate.setMonth(rotationDate.getMonth() + currentCrop.rotationInterval);

  const handleAddCrop = () => {
    if (newCropName && newCropRotationInterval) {
      const newCrop = {
        id: Date.now().toString(),
        name: newCropName,
        rotationInterval: parseInt(newCropRotationInterval),
      };
      setCropsData([...cropsData, newCrop]);
      setAddedCrops([...addedCrops, newCrop]);
      setNewCropName("");
      setNewCropRotationInterval("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{i18next.t("cropRotationCalendar")}</Text>
      <LanguageSelector />

      <View style={styles.cropInfoContainer}>
        <Text style={styles.cropLabel}>{i18next.t("currentCrop")}</Text>
        <Text style={styles.cropName}>{currentCrop.name}</Text>
      </View>

      <Text style={styles.rotationDateText}>
        {i18next.t("nextRotationDate")} {rotationDate.toDateString()}
      </Text>

      <TouchableOpacity style={styles.nextCropButton} onPress={handleNextCrop}>
        <Text style={styles.nextCropButtonText}>{i18next.t("nextCrop")}</Text>
      </TouchableOpacity>

      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={{
            [rotationDate.toISOString().slice(0, 10)]: {
              selected: true,
              selectedColor: "blue",
            },
          }}
          hideExtraDays
          theme={{
            calendarBackground: "white",
            selectedDayBackgroundColor: "blue",
            selectedDayTextColor: "white",
          }}
        />
      </View>

      <View style={styles.addCropContainer}>
        <Text style={styles.subheading}>{i18next.t("addCrop")}</Text>
        <TextInput
          placeholder={i18next.t("cropName")}
          value={newCropName}
          onChangeText={setNewCropName}
          style={styles.input}
        />
        <TextInput
          placeholder={i18next.t("rotationInterval")}
          value={newCropRotationInterval}
          onChangeText={setNewCropRotationInterval}
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCrop}>
          <Text style={styles.addButtonText}>{i18next.t("addCrop")}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addedCropsContainer}>
        <Text style={styles.subheading}>{i18next.t("addedCrops")}</Text>
        <FlatList
          data={addedCrops}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.addedCropText}>
              {item.name} - {i18next.t("rotationInterval")}:{" "}
              {item.rotationInterval} {i18next.t("months")}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

const LanguageSelector = () => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <View style={styles.languageSelectorContainer}>
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => changeLanguage("en")}
      >
        <Text style={styles.languageButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => changeLanguage("hi")}
      >
        <Text style={styles.languageButtonText}>हिन्दी</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => changeLanguage("te")}
      >
        <Text style={styles.languageButtonText}>తెలుగు</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  bannerImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cropInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cropLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  cropName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rotationDateText: {
    fontSize: 16,
    marginBottom: 10,
  },
  nextCropButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
  },
  nextCropButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  addCropContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  addedCropsContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  addedCropText: {
    fontSize: 16,
    marginBottom: 5,
  },
  languageSelectorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  languageButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CropRotationCalendar;
