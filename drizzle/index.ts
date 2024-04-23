import process from 'node:process'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import schema from './schema'

const poolConnection = mysql.createPool({
    // timezone: '+09:00',
    // dateStrings: ['DATE', 'DATETIME', 'TIMESTAMP'],
    host: 'localhost', 
    user: 'root', 
    password: 'tz-test', 
    database: 'tz-test', 
})

const db = drizzle(poolConnection, { schema, mode: 'default' })

export { db }


// process.env.DATABASE_URL!
// mysql://root:tz-test@localhost:3306/tz-test