import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export function dateFormat(timestamp: FirebaseFirestoreTypes.Timestamp)  {
  if(timestamp) {
    const data = new Date(timestamp.toDate());

    const day = data.toLocaleDateString('pt-BR');
    const hour = data.toLocaleTimeString('pt-BR');

    return `${day} às ${hour}`
  }
}
