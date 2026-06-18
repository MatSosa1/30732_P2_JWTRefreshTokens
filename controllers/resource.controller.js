export class ResourceController {
    /**
     * Simula un recurso privado del Microservicio Alpha.
     */
    static getAlphaPrivateData(req, res) {
        // return res.status(200).json({
        //     message: "Acceso exitoso al Servicio Alpha",
        //     user: req.user
        // });

        // Error para Sentry
        throw new Error('Conexión perdida con DB');
    }

    /**
     * Simula un recurso privado del Microservicio Beta.
     */
    static getBetaPrivateData(req, res) {
        return res.status(200).json({
            message: "Acceso exitoso al Servicio Beta",
            user: req.user
        });
    }
}
