import jwt  from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'MICLAVESECRETA7373773737337YHHBJBJB9NNDKNKDNKNDJBDJFD$%&&$9299282892'

export const signToken = (payload: object, expiresIn: any = '2h') => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export const verifyToken = (token: string) =>
    jwt.verify(token, JWT_SECRET);