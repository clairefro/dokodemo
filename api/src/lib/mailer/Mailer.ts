import mailjet from 'node-mailjet'
import { logger } from '../logger'

const defaults = {
  senderName: `dokodemo`,
  subject: `<No subject>`,
  html: `<p>[empty]</p>`,
  customId: `Uncategorized`,
}

interface MailerConstrcutorArgs {
  senderEmail: string
}

interface MailerSendArgs {
  subject?: string
  html?: string
  recipient: string
  customId?: string
}

interface BuildRequestArgs extends MailerSendArgs {}

export class Mailer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client: any
  senderEmail: string
  isDebugMode = false

  constructor({ senderEmail }: MailerConstrcutorArgs) {
    if (
      !process.env.MAILJET_API_KEY ||
      !process.env.MAILJET_API_SECRET ||
      !process.env.MAILJET_SENDER_EMAIL
    ) {
      throw new Error('Mailjet credentials not provided in .env file')
    }
    if (process.env.DEBUG_DISABLE_EMAIL) {
      this.isDebugMode = true
      logger.warn(
        'EMAIL IS DISABLED. To enable, comment out DEBUG_DISABLE_EMAIL env var'
      )
    }
    this.senderEmail = senderEmail
    this.init()
  }

  init() {
    this.client = mailjet.connect(
      process.env.MAILJET_API_KEY,
      process.env.MAILJET_API_SECRET
    )
  }

  buildRequest = ({ recipient, subject, html, customId }: BuildRequestArgs) => {
    if (!subject) subject = defaults.subject
    if (!html) subject = defaults.html
    if (!customId) subject = defaults.customId
    return {
      Messages: [
        {
          From: {
            Email: this.senderEmail,
            Name: defaults.senderName,
          },
          To: [
            {
              Email: recipient,
            },
          ],
          Subject: subject,
          // TextPart: 'My first Mailjet email',
          HTMLPart: html,
          CustomID: customId,
        },
      ],
    }
  }

  // TODO: type response
  async send(args: MailerSendArgs): Promise<number> {
    try {
      const res = await this.client
        .post('send', { version: 'v3.1' })
        .request(this.buildRequest({ ...args }))
      console.log(res.body)
      logger.info(`Sent mailjet email with status: ${res.statusCode}`)
      return res.statusCode as number
    } catch (err) {
      logger.error(`Error when sending email.`, err)
      throw new Error('Error when sending email')
    }
  }

  sendPasswordResetToken({ recipient, resetTokenUrl }) {
    if (this.isDebugMode) {
      console.log({ recipient, resetTokenUrl })
      return 200
    }
    // TODO: Make templating engine if making any more email templates
    return this.send({
      recipient,
      subject: 'Reset your dokodemo password',
      html: `<a href=${resetTokenUrl} target="_blank">${resetTokenUrl}</a>`,
      customId: 'PasswordReset',
    })
  }
}
