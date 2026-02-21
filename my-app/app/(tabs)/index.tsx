import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
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
        <ThemedText type="title">Nathan Cox - Website Still Under Construction</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bio:</ThemedText>
        <ThemedText>
          Hello, my name is Nathan Cox. I'm from Cleveland, Ohio. As far as personal interests, 
          I like to have very diversified hobbies. I enjoy walking around Cleveland and hiking anywhere I can.
          I like to play all kinds of video games, watch every movie ever made, listen to music everywhere I go,
          draw a little, and read the occasional fantasy or sci-fi book. Although, I always prefer to do things with friends
          whether that's playing games like dnd or mahjong, going out around campus, or just hanging out at the dorms
          and talking. I could go on forever but I think you'd just have to ask me in person if you want to know me better!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Education Summary:</ThemedText>
        <ThemedText>
          I am a student at Case Western Reserve University.
          I am currently pursuing a bachelor of science degree in computer science and business management
          with minors in math, economics, and artificial intelligence. I am also pursuing a master's degree in
          computer science with a focus on artificial intelligence as a part of CWRU's integrated bachelor's and
          master's program. I am passionate about using business and technology for social good and world benefit.
          Some of my acedmic interests include research on how AI models can be used to model molecular and organic
          structures to accelerate drug discovery and other scientific research.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Experience Summary:</ThemedText>
        <ThemedText>
          I have worked at Nothing Bundt Cakes, Beaumont Scout Reservation, and even contributed to some programs here at
          CWRU. I have worked as a sustainability consultant for the Fowler Center's Business for world benefit program
          and I have developed programs for my own personal projects and for clubs at CWRU. I have experience coding
          in many languages including Java, Javascript, Python, html, css, and more. I am good at working with teams
          on projects and developing software.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Projects Summary:</ThemedText>
        <ThemedText>
          I have worked on many projects both for school and for fun. Some of these include a scavenger hunt website,
          a couple browser extensions, and some basic homework assignments. Most of the projects I have completed
          are displayed on the projects page.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  banner: {
    height: 400,
    width: 2000,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
