import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type OrderDTO = {
  patrimony: string;
  description: string;
  status: 'open' | 'closed',
  solution?: string;
  created_at: FirebaseFirestoreTypes.Timestamp;
  closed_at: FirebaseFirestoreTypes.Timestamp;
}
