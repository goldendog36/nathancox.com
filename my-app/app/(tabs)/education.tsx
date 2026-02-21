import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
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
          Education
        </ThemedText>
      </ThemedView>
      <ThemedText>
        I have received education(in the most robotic of terms) from Communion of Saints; Saint Ann(K-2nd grade),
        Campus International School(3-8th grade), Campus International High School(9-12th grade), and most importantly
        Case Western Reserve University(2024 - Present). However, I am also a very intrinsically motivated person and have
        sought out resources and ways to learn on my own throughout my whole life.
      </ThemedText>
      <ThemedText>
        I have performed very well academically here at CWRU, making Dean’s High Honors in two semesters. I have also
        taken incredible courses here taught by some truly great people. My first semester here I took programming in Java
        with Harold Connamacher which taught me how to look at assignments from the perspective of a computer scientist to
        analyze and fully understand what I was doing, why, and how. In my second semester I took introduction to data
        structure with Andrew Watkins which taught me many different things ranging from manipulation of data: searching
        and sorting, hashing, recursion and higher order functions to abstract data types, templating, and the separation
        of interface and implementation. In my third semester I took logic design, discrete math, and linear algebra with
        Evren Cavusoglu, Shuai Xu, and Anuj Abhishek respectively and this is where I really started learning about how to
        design for computer systems in a mathematical and precise way.
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
