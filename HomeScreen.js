import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const HomeScreen = ({navigation}) => {
  
  const theme = useTheme();

    return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
      <Swiper autoplay height={200} activeDotColor='#94c5a1'>
          <View style={styles.slide}>
            <Image 
              source={require('../assets/banners/book-banner1.jpg')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image 
              source={require('../assets/banners/book-banner2.jpg')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image 
              source={require('../assets/banners/book-banner3.jpg')}
              resizeMode='cover'
              style={styles.sliderImage}
            />
          </View>
      </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        
        <TouchableOpacity 
          style={styles.categoryBtn} 
          onPress={() => navigation.navigate('CardListScreen', {title: 'Self-Help'})}>
        <View style={styles.categoryIcon}>
          <Fontisto name='smiley' size={35} color='#fff'/>
        </View>
        <Text style={styles.categoryBtnTxt}>Self-Help</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => navigation.navigate('CardListScreen', {title: 'Kinh Điển'})}>
        <View style={styles.categoryIcon}>
          <Ionicons name='ios-star' size={35} color='#fff'/>
        </View>
        <Text style={styles.categoryBtnTxt}>Kinh Điển</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => navigation.navigate('CardListScreen', {title: 'Sci-Fi'})}>
        <View style={styles.categoryIcon}>
          <Ionicons name='md-planet' size={35} color='#fff'/>
        </View>
        <Text style={styles.categoryBtnTxt}>Sci-Fi</Text>
        </TouchableOpacity>
        
      </View>
      
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        
        <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => navigation.navigate('CardListScreen', {title: 'Ngôn Tình'})}>
        <View style={styles.categoryIcon}>
          <Ionicons name='md-heart' size={35} color='#fff'/>
        </View>
        <Text style={styles.categoryBtnTxt}>Ngôn Tình</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => navigation.navigate('CardListScreen', {title: 'Phiêu Lưu'})}>
        <View style={styles.categoryIcon}>
          <Ionicons name='md-compass' size={35} color='#fff'/>
        </View>
        <Text style={styles.categoryBtnTxt}>Phiêu Lưu</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => navigation.navigate('CardListScreen', {title: 'Thần Thoại'})}>
        <View style={styles.categoryIcon}>
          <Fontisto name='ampproject' size={35} color='#fff'/>
        </View>
        <Text style={styles.categoryBtnTxt}>Thần Thoại</Text>
        </TouchableOpacity>
      
      </View>

      <View style={styles.cardsWrapper}>
        <Text style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        }}>Xem Gần Đây</Text>
        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image 
              source={require('../assets/banners/book1.jpg')}
              resizeMode='stretch'
              style={styles.cardImg}
            /> 
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Đắc Nhân Tâm</Text>
            <StarRating ratings={5} reviews={99} />
            <Text style={styles.cardDetails}>Cuốn sách hay nhất của mọi thời đại đưa bạn đến thành công.</Text>
          </View>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image 
              source={require('../assets/banners/book2.jpg')}
              resizeMode='stretch'
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>3 Người Thầy Vĩ Đại</Text>
            <StarRating ratings={4} reviews={80} />
            <Text style={styles.cardDetails}>Câu chuyện đặc biệt về cách sống theo những gì mình mong muốn.</Text>
          </View>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image 
              source={require('../assets/banners/book3.jpg')}
              resizeMode='stretch'
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Trên Đường Băng</Text>
            <StarRating ratings={4} reviews={60} />
            <Text style={styles.cardDetails}>Thay đổi tư duy, chạy đà cất cánh.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#94c5a1',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#94c5a1'
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444'
  },
});