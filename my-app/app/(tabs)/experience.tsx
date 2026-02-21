import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '../../components/parallax-scroll-view';
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';
import { Fonts } from '../../constants/theme';

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#a02659', dark: '#4712a8' }}
      headerImage={
        <Image
          source={require('../../assets/images/purple-banner.png')}
          style={styles.banner}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Experience
        </ThemedText>
      </ThemedView>
      <ThemedText>
        While here at CWRU, I have also participated in the Fowler Center’s Business for World Benefit program where I
        acted as a sustainability consultant from 2024 to the present. I’ve worked with companies from around the world
        including Got Produce, Lock-In Billiards, RedHouse Studio and Rocket Arena to research sustainable solutions. I
        demonstrated my professional business conduct working with companies alongside graduate students and at a time
        acting as a consulting group leader. My work at the clinic has helped many businesses reach their goals for local
        and global engagement and benefit.
      </ThemedText>
      <ThemedText>
        In the summer between high school and college I started working for Beaumont, the boy scout camp my troop and I
        went to when I was younger. There I acted as the handicraft director for the 2024 and 2025 summer seasons. I created
        fourteen programs in my area to provide better memorable for the scouts participating. I worked well with others in
        every position at the reservation to make many of the events on property happen and to improve the experience of
        those who visited. I greatly contributed to our mission to prepare the scouts for life and provide fun experiences
        for them.
      </ThemedText>
      <ThemedText>
        I started working as soon as I could in high school at Nothing Bundt Cakes. I continued to work there frosting
        cakes from April 2021 until I graduated high school in May 2024. I exceeded expectations in meeting all of Nothing
        Bundt Cakes’s core values, working well with others, and putting an abundance of effort into the quality of every
        order.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 2000,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
