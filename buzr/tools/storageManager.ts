import AsyncStorage from '@react-native-async-storage/async-storage';

type MethodResult = "success" | "empty" | "failed";

class StorageManager {
  // Fonction pour stocker les données
  static async save<T>(cle: string, donnees: T): Promise<{status: MethodResult}> {
    try {
      await AsyncStorage.setItem(cle, JSON.stringify(donnees));
      return {status: "success"};
    } catch (error) {
      console.error('StorageManager.save ~> Erreur :', error);
      return {status: "failed"};
    }
  }

  // Fonction pour obtenir les données
  static async load<T>(cle: string): Promise<{data: T | null, status: MethodResult}> {
    try {
      const dataJSON = await AsyncStorage.getItem(cle) as string | null;
      if (dataJSON !== null) {
        const data = JSON.parse(dataJSON) as T;
        return {data: data, status: "success"};
      }
      else {
        return {data: null, status: "empty"};
      }
    } catch (error) {
      console.log('StorageManager.load ~> Erreur :', error);
      return {data: null, status: "failed"};
    }
  }
}

export default StorageManager;
