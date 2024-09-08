import { NextApiRequest, NextApiResponse } from 'next';

// Define your handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Your logic here
    res.status(200).json({ message: 'Profile data' });
}
