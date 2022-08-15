// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
mail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Phone: ${body.phone}rn
  Message: ${body.message}
`;
  try {
    await mail.send({
      to: 'paul@arbsos.co.uk',
      from: 'paul@arbsos.co.uk',
      subject: `Contact Form Submission from ${body.name}`,
      text: message,
      html: message.replace(/rn/g, '<br>'),
    });
  } catch (error: any) {
    return res
      .status(error?.statusCode || 500)
      .json({ error: error?.message || 'An error occurred' });
  }
  return res.status(200).json({ error: '' });
}
