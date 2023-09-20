// import pathLocations from "../data/Pathlocation";
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};
export const removeToken = () => {
  localStorage.removeItem("token");
};

export const setLastVisitedPath = (path) => {
  if (window.location.pathname != "/login")
    localStorage.setItem("last_path", window.location.pathname);
};
export const getLastVisitedPath = (path) => {
  var path = localStorage.getItem("last_path");
  localStorage.removeItem("last_path");
  return path;
};

export const autoLogout = () => {
  setLastVisitedPath();
  removeToken();
//   window.location.href = pathLocations.login;
};
export const isLoggedIn = () => {
  if (getToken() === null) {
    return false;
    // eslint-disable-next-line no-else-return
  } else if (getToken() === undefined) {
    return false;
  } else {
    return true;
  }
};
