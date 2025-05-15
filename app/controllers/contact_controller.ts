/* eslint-disable prettier/prettier */
import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main' 

export default class ContactController {
  public async send({ request, response }: HttpContext) {
    const { name, email, message } = request.only(['name', 'email', 'message'])

    await mail.send((messageBuilder) => {
      messageBuilder
        .from(email)
        .to('akasha.rayonnant@gmail.com') // ton adresse perso ici
        .subject(`Nouveau message de ${name}`)
        .htmlView('emails.contact', { name, email, message })
    })

    return response.redirect('/merci')
  }
}
