import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '../../components/haptic-tab';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          title: 'Education',
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experience',
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
        }}
      />
    </Tabs>
  );
}
