import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#a02659', dark: '#4712a8' }}
      headerImage={
        <Image
          source={require('@/assets/images/purple-banner.png')}
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
        This is the tab that explains what I've done for work and how that has prepared me for internships and jobs
        in the future.
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
