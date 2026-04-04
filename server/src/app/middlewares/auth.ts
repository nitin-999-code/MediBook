import { NextFunction, Request, Response } from "express";
import ApiError from "../../errors/apiError";
import { JwtHelper } from "../../helpers/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";

export const auth = (...rules: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new ApiError(401, "Session expired. Please login again.")
        }
        // Support both "Bearer <token>" and raw token formats
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
        let verifiedUser;
        try {
            verifiedUser = await JwtHelper.verifyToken(token, config.jwt.secret as Secret);
        } catch (error) {
            throw new ApiError(403, "User is not Found !!")
        }
        req.user = verifiedUser;

        if (rules.length && !rules.includes(verifiedUser.role)) {
            throw new ApiError(403, "Session expired. Please login again.")
        }
        next();
    } catch (error) {
        if (error instanceof ApiError && error.message === "User is not Found !!") {
             error.message = "Session expired. Please login again.";
        }
        next(error)
    }
}