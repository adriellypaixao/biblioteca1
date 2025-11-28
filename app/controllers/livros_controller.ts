import { createLivroValidator } from '#validators/livro'
import type { HttpContext } from '@adonisjs/core/http'
import Livro from "#models/livro"

export default class LivrosController {
  /**
   * Display a list of resource
   */
  public async index({}: HttpContext) {
    const livros=await Livro.all()
    return livros
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator)
    const livro = await Livro.create(payload)
    return livro
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    return livro
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  async update({ params, request }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    const payload = await request.validateUsing(createLivroValidator)
    livro.merge(payload)
    await livro.save()
    return livro
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const livro = await Livro.findOrFail(params.id)
    await livro.delete()
    return livro
  }
}