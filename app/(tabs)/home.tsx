import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants/index';

export default function HomeScreen() {
  const router = useRouter();

  const quickActions = [
    {
      id: 'recharge',
      title: 'شحن الرصيد',
      icon: 'add-circle-outline',
      onPress: () => router.push('/(tabs)/wallet'),
    },
    {
      id: 'history',
      title: 'سجل المكالمات',
      icon: 'time-outline',
      onPress: () => router.push('/(tabs)/calls'),
    },
    {
      id: 'contacts',
      title: 'جهات الاتصال',
      icon: 'people-outline',
      onPress: () => router.push('/(tabs)/contacts'),
    },
    {
      id: 'settings',
      title: 'الإعدادات',
      icon: 'settings-outline',
      onPress: () => console.log('Settings'),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.welcome}>مرحباً، المستخدم</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={40} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.actionsSection}>
        <Text style={styles.sectionTitle}>إجراءات سريعة</Text>
        <View style={styles.actionsGrid}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={styles.actionCard}
              onPress={action.onPress}
            >
              <Ionicons name={action.icon as any} size={32} color={COLORS.primary} />
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 2,
    paddingBottom: SIZES.padding,
  },
  welcome: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  profileButton: {
    padding: 4,
  },
  actionsSection: {
    padding: SIZES.padding,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    marginBottom: SIZES.padding,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionTitle: {
    fontSize: SIZES.body4,
    color: COLORS.text,
    marginTop: 8,
    textAlign: 'center',
  },
});
