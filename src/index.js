import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';

import global_es from "./traslation/ES/global.json";
import global_en from "./traslation/EN/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es:{
      global: global_es,
    },
    en:{
      global: global_en,
    },
  }
});

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Router>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </Router>
  </React.StrictMode>
);



