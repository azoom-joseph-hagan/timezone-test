import { db } from '~/drizzle/index'
import { testTable } from '~/drizzle/schema/test-table'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const bookedOnVal = body.bookingDate

    const createdTestPost = await db.insert(testTable).values({
      bookedOn: bookedOnVal,
      bookedAt: new Date(body.bookingDatetime), 
    })
    if (createdTestPost) {
      return createdTestPost
    }
  })
  