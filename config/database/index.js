const { Pool } = require('pg');

const pool = new Pool({
    host : 'ec2-52-87-22-151.compute-1.amazonaws.com',
    user : 'dotcaqjacbdokp',
    password : 'a9703ad9270910b8a18a4e69a6e5099a02a6b54d38b0cb08688a90916998bb3c',
    database : 'dfoe5icd67a1uo',
    port : 5432,
    ssl: {
        rejectUnauthorized: false
      }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },

}