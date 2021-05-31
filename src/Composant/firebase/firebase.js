import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCE9qljp556voejiqYa41fUfOjrFNUDWYg",
  authDomain: "movies1-db116.firebaseapp.com",
  projectId: "movies1-db116",
  storageBucket: "movies1-db116.appspot.com",
  messagingSenderId: "814815368117",
  appId: "1:814815368117:web:7be7fe93af2256325dbffc",
  measurementId: "G-LLG08XT81D",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function Firebases() {
  app.initializeApp(firebaseConfig);
  return <div></div>;
}
export default Firebases;
