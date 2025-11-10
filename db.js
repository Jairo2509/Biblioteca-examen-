const mysql = require('mysql2');

// Configuración de base de datos - ajusta estos valores según tu MySQL 
const dbHost = process.env.DB_HOST || "bdceupyvmij2kugrn9sv-mysql.services.clever-cloud.com";
const dbUser = process.env.DB_USER || "uszwvxy29g2th0ai";
const dbPassword = process.env.DB_PASSWORD || "yAll6SoveU0IoRDHrD87";
const dbName = process.env.DB_NAME || "bdceupyvmij2kugrn9sv";
const dbPort = process.env.DB_PORT || "3306";

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  port: Number(dbPort)
});

// ✅ Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err.message);
    console.error("\n💡 Soluciones posibles:");
    console.error("1. Verifica que MySQL esté ejecutándose");
    console.error("2. Revisa las credenciales del servidor Clever Cloud");
    console.error("3. Verifica que tu base de datos exista y el usuario tenga permisos.");
    process.exit(1);
  }
  console.log("✅ Conexión exitosa a MySQL");
});

module.exports = connection;
