import {
    getFichasDB,
    getFichaByIdDB,
    createFichaDB,
    updateFichaDB,
    deleteFichaDB,
} from "./ficha.model.js";

export async function getAllFichas(req, res) {
    try {
        const fichas = await getFichasDB();
        res.status(200).send({
            status: "ok",
            data: fichas,
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.code + "=>" + error.message,
        });
    }
}

export async function getFichaById(req, res) {
    try {
        const numeroFicha = req.params.numeroFicha;
        const ficha = await getFichaByIdDB(numeroFicha);
        if (!ficha) {
            throw {
                status: "error",
                message: "Ficha no encontrada.",
                statusCode: 404,
            };
        }
        res.status(200).send({
            status: "ok",
            data: ficha,
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.code + "=>" + error.message,
        });
    }
}

export async function createFicha(req, res) {
    try {
        let data = req.body;
        // Aquí debes añadir validaciones de entrada de datos --- passport-u otra libreria !!!!!
        console.log("Datos recibidos para crear ficha:", data);
        const result = await createFichaDB(data);
        res.status(200).send({
            status: "ok",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.code + "=>" + error.message,
        });
    }
}

export async function updateFicha(req,res) {
    try {
        const numeroFicha = req.params.numeroFicha;
        const data = req.body;
        const result = await updateFichaDB(numeroFicha, data);
        if (result.affectedRows === 0) {
            throw {
                status: "error",
                message: "Ficha no encontrada o no hubo cambios para actualizar.",
                statusCode: 404,
            };
        }
        res.status(200).send({
            status: "ok",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.code + "=>" + error.message,
        });
    }
}

export async function deleteFicha(req, res) {
    try {
        const numeroFicha = req.params.numeroFicha;
        const result = await deleteFichaDB(numeroFicha);
        if (result.affectedRows === 0) {
            throw {
                status: "error",
                message: "Ficha no encontrada para eliminar.",
                statusCode: 404,
            };
        }
        res.status(200).send({
            status: "ok",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.code + "=>" + error.message,
        });
    }
}