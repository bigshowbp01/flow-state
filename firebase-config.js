import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsG3mAd2yEwDBw4jPrumIBAexSD-Vh1ag",
  authDomain: "web-flow-state.firebaseapp.com",
  projectId: "web-flow-state",
  storageBucket: "web-flow-state.firebasestorage.app",
  messagingSenderId: "799159500439",
  appId: "1:799159500439:web:1dada522e40f3a75ec73d2",
  measurementId: "G-VEL5GQ1G72"
};

const app = initializeApp(firebaseConfig);

// Analytics requires a supported browser environment (https/localhost).
isSupported()
  .then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  })
  .catch(() => {
    // Ignore analytics initialization failures in unsupported contexts.
  });

export { app };
