import dbconn from "../../config/dbconexion.js";

export async function getFichasDB() {
  const [rows] = await dbconn.query("SELECT * FROM ficha");
  return rows;
}

export async function getFichaByIdDB(numeroFicha) {
  const [rows] = await dbconn.query("SELECT * FROM ficha WHERE numeroFicha = ?", [numeroFicha]);
  return rows[0]; // Retorna el primer resultado o undefined si no se encuentra
}

export async function createFichaDB(fichaData) {
  const [result] = await dbconn.query("INSERT INTO ficha SET ?", [fichaData]);
  return result;
}

export async function updateFichaDB(numeroFicha, fichaData) {
  const [result] = await dbconn.query("UPDATE ficha SET ? WHERE numeroFicha = ?", [
    fichaData,
    numeroFicha,
  ]);
  return result;
}

export async function deleteFichaDB(numeroFicha) {
  const [result] = await dbconn.query("DELETE FROM ficha WHERE numeroFicha = ?", [numeroFicha]);
  return result;
}