
const { Pool } = require('pg');
require('dotenv').config(); 

const pool = new Pool({
  host: process.env.DB_HOST,      
  port: process.env.DB_PORT,      
  user: process.env.DB_USER,      
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME,  
  max: 20,                        
  idleTimeoutMillis: 30000,       
  connectionTimeoutMillis: 2000,  
});

// Tester la connexion
pool.connect()
  .then(client => {
    console.log('Connecté à la base de données PostgreSQL');
    client.release(); // Libère la connexion après test
  })
  .catch(err => console.error('Erreur de connexion', err.stack));

module.exports = pool;
