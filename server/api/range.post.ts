import { and, eq, gte, lte } from 'drizzle-orm';
import { db } from '~/drizzle/index'
import { testTable } from '~/drizzle/schema/test-table'


export default defineEventHandler(async (event) => { 
    const body = await readBody(event)
    const from = new Date(body.from)
    const to = new Date(body.to)
    console.log("body: ", body);

    const testTables = await db.select().from(testTable).where(and(gte(testTable.bookedAt, from), lte(testTable.bookedAt, to)))
    console.log(testTables);
    return testTables
  })
  

