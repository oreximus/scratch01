import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2l94CDMO7fl0CosD_snI6GHyGxBlNP1k",
  authDomain: "demoapp-cebaf.firebaseapp.com",
  databaseURL: "https://demoapp-cebaf-default-rtdb.firebaseio.com",
  projectId: "demoapp-cebaf",
  storageBucket: "demoapp-cebaf.appspot.com",
  messagingSenderId: "543354888729",
  appId: "1:543354888729:web:c711d25cea0e673231c088",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
