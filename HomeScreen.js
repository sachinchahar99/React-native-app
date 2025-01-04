import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const cities = {
  "Mumbai (India)": ["ISKCON JUHU - Hare Rama Hare Krishna Temple", "ISKCON Temple(Sri Sri Radha Girdhari Temple) - Mira Bhayandar", "ISKCON Chowpatty (Sri Sri Radha Gopinath Temple) - Girgaon Chowpatty ", "ISKCON Temple -  Thane ","ISKCON Temple (Radha Madan Mohan Ji Temple) - Khargar, Navi Mumbai","Hare Krishna Movement - Trinity Housing Society, Hiranandani"],
  "Nagpur (India)": ["ISKCON Empress City - Sri Sri Radha Gopinath Temple"],
  "Solapur (India)": ["ISCKON Akalkot Rd SOLAPUR - Sri Sri Radha Damodar Temple"],
  "Amravati (Maharashtra, India)":["ISKCON Temple Sarswati Colony - Sri Sri Rukmini Dwarikadish Temple"],
  "Indore (India)": ["ISKCON Nipania - Sri Sri Radha Govinda Tempple"],
  "Bhopal (India)": ["ISKCON Raisen Rd - Sri Sri Radha Gaura Vallabha Temple"],
  "Patna (India)": ["ISKCON Temple Patna  - Adalatganj"],
  "Bengaluru (India)": ["ISKCON Bengaluru (Sri Radha Krishnachandra Temple) - Hare Krishna Hill,  Rajajinagar area", "ISKCON Temple(Sri Radharaja Govinda Temple) - Vaikuntha Hill, Vasanthapura "],
  "Pune (India)": ["ISKCON Nigdi - Sri Govind Dham ", "ISKCON Pune Camp - Sri Sri Radha Kunj Bihari Temple", "ISKCON Temple Katraj", "Hare Krishna Movement - Baner Rd, Sadhu Vaswani Nagar"],
  "Ahmedabad (India)": ["ISKCON Ahmedabad (Sri Sri Radha Govinda Dham) - Ramdev Nagar", "Hare Krishna Temple (Sri Sri Radha Madhava Temple) - Near Science City, Bhadaj"],
  "Jaipur (India)": ["ISKCON Temple Jaipur (Sri Sri Girdhari Dauji Temple) - Mansarovar ", "Gupt Vrindavan Dham(Akshaya Patra Temple) - Jagatpura"],
  "Udaipur (India)": ["ISKCON Temple Udaipur - Gangu Kund Rd"],
  "Kota(India)": ["Hare Krishna Temple (Sri Sri Gaura Nitai Temple) - Mukundra Vihar, Kota Bypass Rd", "ISKCON Temple Kota - Kishorepura"],
  "Delhi (India)": ["ISKCON Delhi - Sri Sri Radha Parthasarthi Temple", "ISKCON Dwarka - Sri Sri Rukmini Dwarikadish Temple ", "ISKCON Temple Punjabi Bagh", "ISKCON Temple Chhatarpur"],
  "Chandigarh (India)": ["ISKCON Temple Chandigarh(Sector 36-B) - Sri Sri Radha Madhava Temple"],
  "Dehradun(India)": ["ISKCON Dehradun(Dudhli Road) - Sri Sri Radha Banke Bihari Temple"],
  "Jalandhar (India)": ["ISKCON Jalandhar(Dilbagh Rd) - Sri Radha Krishna Mandir"],
  "Hyderabad (India)": ["ISKCON Attapur - Sri Sri Radha Madhava Temple", "ISKCON Temple - Sri Sri Radha Madan Mohan Temple(Abids) - ", "ISKCON Temple (Saint Johns Road) - Sri Sri Radha Gopinath Mandir" , "ISKCON Temple Rampally", "Hare Krishna Golden Temple - NBT Nagar"],
  "Chennai (India)": ["ISKCON Temple Chennai - Akkarai ",  "Dakshina Dwarika Dham(Hare Krishna Movement) - Tiruvanmiyur Beach"],
  "Lucknow (India)": ["ISKCON Lucknow - Sri Sri Radha Raman Bihariji Temple - Golf City(Sector -f)","Hare Krishna Temple - Gomti Nagar"],
  "Kanpur (India)": ["ISKCON Temple Kanpur(Sri Sri Radha Madhav Ji Temple) - Mainavati Marg"],
 "Bhubaneswar (India)": ["ISKCON Temple Bhubaneswar(Sri Sri Krishna Balarama Mandir) -   Nayapalli "],
  "Kolkata (India)": ["ISKCON Temple Kolkata(Sri Sri Radha Govinda Temple) - Albert Road ", "ISKCON Temple - Lake Avenue", "ISKCON Temple - New Alipore", "ISKCON Temple - Sharpoorji Bus Terminus, Newtown ", "ISKCON Tollygunge(The Birthplace Temple of Swami Prabhupada)", "ISKCON Temple(Sri Sri Gaura Nitai Temple) - Painhati", "ISKCON Temple - Bichali Ghat, Howrah"],
  "Guwahati (India)" : ["ISKCON Guwahati - (Sri Sri Rukmini Krishna Temple)  - Kasturba Ashram Rd ", "Hare Krishna Temple - Ghorajan"],
  "Vrindavan (India)": ["ISKCON Vrindavan (Sri Sri Krishna Balaram Temple) - Raman Reiti", "Vrindavan Chandrodaya Temple(Akshaya Patra Temple) - India's tallest temple"],
  "Gurugram (India)": ["ISKCON Temple(Sri Sri Radha Damodar Temple) -  Sohna Road"],
  "Jabalpur (India)": ["ISCKON Temple Jabalpur (Sri Sri Radha Raman Temple) - Near Bhedaghat Main Rd"],
  "Raipur (India)": ["ISKCON Temple Raipur - Alopi Nagar"],
  "Mayapur (India)":["ISKCON Mayapur - Sri Mayapur Chandrodaya Temple"],
  "Vijaywada (India)": ["ISKCON Sri Temple Jagganath Temple - Skew Bridge ", "Sri Sri Radha Shyam Sundar Temple (ISKCON Temple)"],
  "Vishakapatnam (India)": ["ISKCON Temple Vizag - Beach Rd" , "ISKCON Temple - Sagar Nagar",
  "Sri Sri Nitai Gauranga Temple - Chaitya Kutir Apartment"],
  "Kochi (India)": ["ISCKON Srila Prabhupada Memorial -  Kochi"],
  "London (UK)":["ISKCON London (Sri Sri Radha Krishna Temple) - Soho Street,", "ISKCON Temple South London - 42 Enmore Road"  ],
  "Coimbatore(India)":["ISKCON Temple (Sri Jagganatha Temple)  - Nehru Nagar West"],
  "Trivandrum (India)":["ISKCON Temple(Sri Sri Krishna Balarama Temple - Pakaloor Road", "ISKCON Temple - Kudappanakunnu"],
  "Tiruchirappalli (India)":["ISKCON Temple of Sri Sri Jagannatha, Baladeva and Subhadramayi -  Srirangam"],
  "Madurai (India)":["ISKCON Temple(Sri Sri Radha Mathurapati Temple) - Mani Nagaram Main Rd"],
  "Prayagraj (India)":["ISKCON Temple (Sri Sri Radha Venimadhav Temple)  -  Baluaghat"],
  "Varanasi (India)":["ISKCON Temple (Shri Shri Radha Gopal Temple) - Durgakund Rd"],
  "Noida (India)":["ISKCON Temple(Sri Sri Radha Govind Dev Ji Temple) - Maharaja Agrasen Marg"],
"Ghaziabad (India)":["ISKCON Temple (Sri Sri Radha Madan Mohan Temple ) - Sec-11, Raj Nagar "],
"Belagavi (India)":["ISKCON Temple(Sri Sri Radha Gokulananda Temple) - Tilakwadi"],
  "Birmingham (UK)":["ISKCON Temple Birmingham  - 84 Stanmore Rd"],
  "Leicester (UK)":["ISKCON Temple Leicester  - Granby Street"],
  "Coventry (UK)":["ISKCON Temple Coventry  - Kingfield Rd"],
  "Manchester (UK)":["ISKCON Temple Manchester  - 20 Mayfield Rd"],
  "Newcastle (UK)":["ISKCON Temple Newcastle  - Westgate Rd"],
  "Scotland (UK)":["ISKCON Scotland - Karuna Bhawan in Lesmahagow"],
  "Watford (UK)":["Bhaktivedanta Manor(Hare Krishna Temple) - Aldenham"],
  "Bangkok(Thailand)":["ISKCON Bangkok(Sri Sri Radha Govinda Temple) - P.R. Union Inn Khlong San "],
  "Pattaya (Thailand)":["ISKCON Temple - Na Klua Chon Buri"],
  "Phuket (Thailand)":["ISKCON Temple - Soi Kwanton 1 Karon"],
  "Adelaide(Australia)":["ISKCON Temple Adelaide(Bhaktivedanta Ashram) - 25 Le Hunte St, Kilburn"], 
  "Melbourne (Australia)":["Melbourne Mahaprabhu Mandira - 197 Danks Street, Albert Park"],
  "Canberra (Australia)": ["Hare Krishna Temple - Canberra ACT"],
  "Sydney (Australia)": ["ISKCON Sydney (Sri Sri Radha Gopinath Mandir) - 180 Falcon Street"],
  "Perth (Australia)": ["ISKCON Perth (Sri Sri Gaura Nitai Temple) - Canning Road "],
  "Brisbane (Australia)": ["ISKCON Temple - 32 Jenifer St"],
  "Cape Town (South Africa)":["ISKCON Temple Cape Town - Saint Andrews Road"],
  "Durban (South Africa)":["ISKCON Durban(Sri Sri Radha Radhanath Temple) - Chatsworth"],
  "Pietermaritzburg (South Africa)":["ISKCON Pietermaritzburg (ISKCON Cultural Centre) - Olympia Way "],
  "Lenasia (South Africa)":["Sri Sri Nitai Gaura Hari Mandir(ISKCON Hare Krishna Temple) - Lenasia "],
  "Sandton (South Africa)":["ISKCON Temple - 11th Avenue Sandton"],
  "Pretoria (South Africa)":["Hare Krishna Temple - Pretoria"],
  "Port Elizabeth (South Africa)":["ISKCON Temple - 22 Alexander Road"],
  "Bloemfontein (South Africa)":["ISKCON Temple - Genral Dan Pienaar Dr"],
  "Newcastle (South Africa) ":["ISKCON Temple - 20 Toucan Place"],
  "Wellington (New Zealand)":["ISKCON Temple - 105 Newlands Road"],
  "Hamilton (New Zealand)":["ISKCON Temple - 188 Maui St"],
  "Aukland (New Zealand)":["ISKCON Temple(Sri Sri Radha Giridhari Temple) - 1229 Coatesville Riverhead Highway"],


  
};

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(Object.keys(cities).map((city) => ({ label: city, value: city })));
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (city) => {
    setValue(city);
    setSelectedCity(city);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Hare Krishna !!!</Text>
        <Text style={styles.subtitle}>
Find ISKCON temple or any temples related with Hare Krishna Movement in Your City 
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={handleCityChange}
          setItems={setItems}
          searchable={true}
          placeholder="Select your city(It must be in India, UK, Thailand, NZ, Australia)"
          searchPlaceholder="Type city name ..."
          placeholderStyle={styles.placeholder}
        />
        {selectedCity && (
          <View style={styles.details}>
            <Text style={styles.cityName}>{selectedCity}</Text>
            {cities[selectedCity].map((temple, index) => (
              <View key={index} style={styles.templeContainer}>
                <Text style={styles.templeName}>{temple}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#800080', // Solid Purple color
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFFFFF', // Contrast color for the title
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFD700', // Contrast color for the subtitle
  },
  details: {
    marginTop: 20,
  },
  cityName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFFF00', // Yellow color for the city name
  },
  templeContainer: {
    marginBottom: 10,
  },
  templeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFF00', // Yellow color for the temple names
  },
  placeholder: {
    color: 'orange',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
