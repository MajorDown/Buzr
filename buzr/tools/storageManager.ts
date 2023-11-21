import AsyncStorage from '@react-native-async-storage/async-storage';

type MethodResult = "success" | "empty" | "failed";

class StorageManager {
  // Fonction pour stocker les données
  static async save<T>(cle: string, donnees: T): Promise<{status: MethodResult}> {
    try {
      await AsyncStorage.setItem(cle, JSON.stringify(donnees));
      return {status: "success"};
    } catch (erreur) {
      console.error('StorageManager ~> Erreur :', erreur);
      return {status: "failed"};
    }
  }

  // Fonction pour obtenir les données
  static async load<T>(cle: string): Promise<{data: T | null, status: MethodResult}> {
    try {
      const dataJSON = await AsyncStorage.getItem(cle) as string | null;
      if (dataJSON !== null) {
        const data = JSON.parse(dataJSON) as T;
        console.log('Données récupérées avec succès:', data);
        return {data: data, status: "success"};
      }
      else {
        return {data: null, status: "empty"};
      }
    }
    catch (error) {
      console.log('Erreur lors de la récupération des données:', error);
      return {data: null, status: "failed"};
    }
  }
}

export default StorageManager;
