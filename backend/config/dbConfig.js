const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost', // 예: 'localhost'
  user: 'root', // 예: 'root'
  password: 'password',
  database: 'ryples',
  connectionLimit: 5, // 연결 풀에 유지할 최대 연결 수
  port: 3307
});

module.exports = pool;