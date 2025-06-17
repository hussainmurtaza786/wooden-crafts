import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {

    return Response.json(
        { user: { name: 'hussain', age: 18, isMarried: false } },
        // { status: 200 }
    )
}