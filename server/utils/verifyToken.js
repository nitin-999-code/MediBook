import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Session expired. Please login again."));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Session expired. Please login again."));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  if (req.user.id || req.user.isAdmin || req.user.isDoctor) {
    next();
  } else {
    return next(createError(403, "Session expired. Please login again."));
  }
};
export const verifyAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    return next(createError(403, "Session expired. Please login again."));
  }
};