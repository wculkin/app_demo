/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import {Firebase} from "./Firebase";

admin.initializeApp();
const firebase = new Firebase();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest({cors: true}, async (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  await createUser(request.body);
  response.send("Hello from Firebase!");
});

async function createUser(params: { email: string, password: string, name: string }) {
  const {email, password, name} = params;
  const userRecord = await firebase.auth.createUser({
    email: email,
    password: password,
  });
  const userData = {
    id: userRecord.uid,
    email,
    name,
  };
  const returnData = {
    userData: userData,
    userRecord,
  };
  await firebase.setFireStoreDoc("users", userRecord.uid, userData);
  return returnData;
}
