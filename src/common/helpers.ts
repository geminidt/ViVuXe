import dayjs from "dayjs";

export const getUserId = () => {
  const userId = localStorage.getItem("userId")
    ? Number(localStorage.getItem("userId"))
    : null;

  return userId;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const formatDate = (date: string, type = "DD/MM/YYYY") => {
  return dayjs(date).format(type);
};

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("userId");
};

export const splitFileName = (fullPath: string) => {
  let index = fullPath.lastIndexOf("\\");
  let relativePath = fullPath.substring(index + 1);
  return "/images/" + relativePath;
};
