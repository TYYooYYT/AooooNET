import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2RJfr0JDcPULeYzWkRxvFDNJPw-eAdz8",
  authDomain: "ahmed-al-nageeb.firebaseapp.com",
  projectId: "ahmed-al-nageeb",
  storageBucket: "ahmed-al-nageeb.appspot.com",
  messagingSenderId: "392333502263",
  appId: "1:392333502263:web:63e16e17a5a4c2e4c25cb2",
  measurementId: "G-ZWHC2TFL1W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };