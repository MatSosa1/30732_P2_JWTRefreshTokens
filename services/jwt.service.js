import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

export class JwtService {
    /**
     * Firma un token JWT basándose en el algoritmo configurado.
     * @param {Object} payload - Los datos del usuario a incluir en el token.
     * @returns {string} El token JWT generado.
     */
    static signToken(payload) {
        const claims = {
            sub: String(payload.id),
            name: payload.name,
            exp: Math.floor(Date.now() / 1000) + 60 // 1 minuto
        };

        const key = config.JWT_SECRET;
        if (config.ALGORITHM === 'RS256') key = config.PRIVATE_KEY;

        return jwt.sign(claims, key, {
            algorithm: config.ALGORITHM
        });
    }

    /**
     * Verifica un token JWT basándose en el algoritmo configurado.
     * @param {string} token - El token JWT a verificar.
     * @returns {Object|null} El payload decodificado o null si es inválido.
     */
    static verifyToken(token) {
        try {
            const key = config.JWT_SECRET;
            if (config.ALGORITHM === 'RS256') key = config.PUBLIC_KEY;

            return jwt.verify(token, key, {
                algorithms: [config.ALGORITHM]
            });
        } catch (error) {
            return null;
        }
    }
}
