/* eslint-disable no-const-assign */

import { authKey, userKey } from "../constants/storageKey"
import { getFromLocalStorage, setToLocalStorage } from "../utils/local-storage"

export const storeUserInfo = (name , value) => {
  return setToLocalStorage(name, value)
}
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey)
  const userToken = getFromLocalStorage(userKey)
  // console.log(authToken);
  if (authToken) {
    // const decodedData = decodedToken(authToken);
    return userToken;
  }
  else {
    return ""
  }
}
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey)
  const userToken = getFromLocalStorage(userKey)
  return !!authToken && !!userToken
}

export const isRole = () => {
  let userToken = getFromLocalStorage(userKey)

  userToken = JSON?.parse(userToken);

  return userToken?.accountType
}

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key)
}