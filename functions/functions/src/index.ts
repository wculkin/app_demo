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
  let responseData:any = {};
  try {
    if (request.body.eventType == "createUser") {
      await createUser(request.body);
      responseData = {
        status: "createdUser",
      };
    } else if (request.body.eventType == "signIn") {
      const result = await signIn(request.body);
      if (result) {
        responseData = {
          status: "signedIn",
          userData: result,
        };
      }
    } else {
      throw Error("unknown eventType");
    }
  } catch (error) {
    console.log(error);
  }
  response.json(responseData);
});

async function createUser(params: { email: string, password: string, name: string }) {
  const {email, password, name} = params;
  const userRecord = await firebase.auth.createUser({
    email: email,
    password: password,
  });
  const userData = {
    id: email+password,
    email,
    name,
    password,
  };
  const returnData = {
    userData: userData,
    userRecord,
  };
  await firebase.setFireStoreDoc("users", email+password, userData);
  return returnData;
}

async function signIn(params: { email: string, password: string }) {
  const {email, password} = params;
  const user = await firebase.getFireStoreDocument("users", email+password);
  if (!user) {
    return null;
  }
  return user;
}
