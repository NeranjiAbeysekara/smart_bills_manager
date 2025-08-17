// backend/config/firebaseAdmin.js
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(
    readFileSync('./firebase-service-account.json', 'utf8')
  ))
});

export default admin;
