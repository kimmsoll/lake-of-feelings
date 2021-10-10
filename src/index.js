import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './app';
import GoogleAuth from './service/google_auth';
import { firebaseApp } from './service/firebase';
import EmotionRepository from './service/emotion_repository';

const googleAuth = new GoogleAuth(firebaseApp);
const emotionRepo = new EmotionRepository(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App
    googleAuth={googleAuth}
    emotionRepo={emotionRepo}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

