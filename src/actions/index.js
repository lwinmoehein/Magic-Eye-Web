import {
  TOGGLE_PROGRESS,
  TOGGLE_DRAWER,
  LOG_OUT,
  STORE_USER,
} from "../constants/action-types";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import FirebaseConfig from "../config/FirebaseConfig";
import { SET_DOWNLOAD_URL } from "../constants/action-types";

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export function toggleProgress(payload) {
  return { type: TOGGLE_PROGRESS, payload: payload };
}
export function toggleDrawer() {
  return { type: TOGGLE_DRAWER, payload: null };
}

export function logOut() {
  localStorage.setItem("user", null);
  firebase.auth().signOut();
  return { type: LOG_OUT };
}

export function storeUser(payload) {
  localStorage.setItem("user", JSON.stringify(payload));
  return { type: STORE_USER, payload };
}

export function setDownloadUrl(payload) {
  return { type: SET_DOWNLOAD_URL, payload };
}
