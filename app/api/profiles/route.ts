// Add necessary imports
import { NextApiRequest, NextApiResponse } from 'next';

// Define your GET handler
export async function GET(req: NextApiRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    // Your logic to fetch profile data by id
    return new Response(JSON.stringify({ message: `Profile data for ${id}` }), {
        status: 200,
    });
}