import { Mailer } from './Mailer'

const senderEmail = process.env.MAILJET_SENDER_EMAIL

export const mailer = new Mailer({ senderEmail })
