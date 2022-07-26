// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
mail.setApiKey(process.env.SENDGRID_API_KEY || '');

console.log(process.env.SENDGRID_API_KEY);

type Data = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Phone: ${body.phone}rn
  Message: ${body.message}
`;
  try {
    mail
      .send({
        to: 'paul@arbsos.co.uk',
        from: body.email,
        subject: 'New Message!',
        text: message,
        html: message.replace(/rn/g, '<br>'),
      })
      .then(() => {
        res.status(200).json({ status: 'Ok' });
      });
  } catch (error) {
    console.log(error);
  }
}
