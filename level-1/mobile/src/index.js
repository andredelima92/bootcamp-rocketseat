import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';
// import { Container } from './styles';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(({ data }) => {
      setProjects(data);
    });
  }, []);

  const handleAddProject = async () => {
    const { data } = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Andre Lima',
    });

    setProjects([...projects, data]);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={(project) => project.id}
          data={projects}
          renderItem={({ item }) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />

        <TouchableOpacity
          onPress={handleAddProject}
          activeOpacity={0.6}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* <View style={styles.container}>
        {projects.map((project, index) => {
          return (
            <Text style={styles.project} key={index}>
              {project.title}
            </Text>
          );
        })}
      </View> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
