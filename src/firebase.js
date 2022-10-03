import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9smK7chA_kPKHOdaLnrjgLoND_vpr59U",
  authDomain: "netflix-clone-1f482.firebaseapp.com",
  projectId: "netflix-clone-1f482",
  storageBucket: "netflix-clone-1f482.appspot.com",
  messagingSenderId: "214882536320",
  appId: "1:214882536320:web:cf1ad86607a4c8b050cf65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;