const fs = require("fs");
const dotenv = require("dotenv");

// Carga las variables de entorno del sistema
dotenv.config();

// Obtén la variable de entorno BRANCH_NAME
const branchName = process.env.BRANCH_NAME || "unknown";

// Crea el contenido del archivo de entorno
const envConfig = `export const environment = {
  production: ${process.env.NODE_ENV === "production"},
  branch: '${branchName}'
};
`;

// Escribe el contenido en environment.ts
fs.writeFileSync("./src/environments/environment.ts", envConfig);
