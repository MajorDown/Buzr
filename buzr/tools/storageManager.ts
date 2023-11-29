import AsyncStorage from '@react-native-async-storage/async-storage';

type MethodResult = "success" | "empty" | "failed";

class StorageManager {
  // Fonction pour stocker les données
  static async save<T>(key: string, data: T): Promise<{status: MethodResult}> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      return {status: "success"};
    } catch (error) {
      console.log('StorageManager.save ~> Erreur :', error);
      return {status: "failed"};
    }
  }

  // Fonction pour obtenir les données
  static async load<T>(key: string): Promise<{data: T | null, status: MethodResult}> {
    try {
      const dataJSON = await AsyncStorage.getItem(key) as string | null;
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
