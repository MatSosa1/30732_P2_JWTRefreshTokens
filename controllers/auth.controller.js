import { JwtService } from '../services/jwt.service.js';

export class AuthController {
    /**
     * Simula un servidor de autenticación que genera un token.
     */
    static async generateToken(req, res) {
        const { username, password } = req.body;

        // Validación simulada
        if (username !== "admin" || password !== "admin123") {
            return res.status(401).json({
                message: "Credenciales inválidas"
            });
        }

        const payload = {
            id: 1,
            name: "Administrador"
        };

        const token = JwtService.signToken(payload);

        return res.status(200).json({
            token
        });
    }
}
