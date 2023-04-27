import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>

        {/* Ícones do canto direito */}
        <View style={{ flex: 1, flexDirection: 'row-reverse',  marginRight: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="plus-circle" size={24} color="#2890fa" />
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
            <Feather name="search" size={24} color="#2890fa" />
          </View>
        </View>
      </View>

      {/* Conteúdo da tela */}
      <View style={styles.content}>
        <Text style={styles.contentText}>My Work</Text>
         <View style={{ flex: 1, flexDirection: 'row-reverse',  marginRight: 20 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="more-horizontal" size={24} color="#6e6f74" />
            </View>
          </View>
      </View>

      {/* Barra de navegação */}
      <View style={styles.navBar}>
        <View style={styles.navButton}>
          <Feather  name="home" size={30} color="#2890fa" />
          <Text style={[styles.navText, { color: '#2890fa'}]}>Home</Text>
        </View>

        <View style={styles.navButton}>
          <Feather  name="bell" size={30} color="gray" />
          <Text style={styles.navText}>Notifications</Text>
        </View>

        <View style={styles.navButton}>
          <Feather  name="search" size={30} color="gray" />
          <Text style={styles.navText}>Explore</Text>
        </View>

        <View style={styles.navButton}>
          <Feather name="user" size={30} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17181c',
  },
  header: {
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding:20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  content: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    padding: 20,
    backgroundColor: '#17181c',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Helvetica',
  },
  contentText: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  }
});
