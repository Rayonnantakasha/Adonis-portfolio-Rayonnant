/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  public async Project({ view }: HttpContext){
    return view.render('pages/projets')
  }
}