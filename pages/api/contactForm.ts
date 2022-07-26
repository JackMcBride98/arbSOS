// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
mail.setApiKey(process.env.SENDGRID_API_KEY || '');

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
        from: 'paul@arbsos.co.uk',
        subject: 'Contact Form Submission',
        text: message,
        html: message.replace(/rn/g, '<br>'),
      })
      .then(() => {
        return res.status(200).end();
      });
  } catch (error: unknown) {
    console.log(error);
    return res.status(400).send({ status: 'Error' });
  }
  res.end();
}
