const mysql = require("mysql2");
 
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
 
connection.connect((err) => { 
  if (err) { 
    console.error("❌ Error al conectar a MySQL:", err.message); 
    console.error("\n💡 Soluciones posibles:"); 
    console.error("1. Verifica que MySQL esté ejecutándose"); 
    console.error("2. Si tienes contraseña en MySQL, edita db.js línea 6"); 
    console.error("3. Crea la base de datos 'biblioteca' en MySQL"); 
    console.error("4. Verifica que el usuario 'root' tenga permisos"); 
    console.error("\n🔧 Para crear la base de datos:"); 
    console.error("   mysql -u root -p"); 
    console.error("   CREATE DATABASE biblioteca;"); 
    process.exit(1); 
  } 
  console.log("✅ Conexión exitosa a MySQL"); 
}); 
 
module.exports = connection;