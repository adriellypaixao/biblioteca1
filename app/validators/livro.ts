import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createLivroValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(6),
    autor: vine.string().trim().minLength(6),
    genero: vine.string().trim().minLength(6),
    dataPublicacao: vine.date()
  })
)

/**
 * Validates the post's update action
 */
export const updateLivroValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(6),
    autor: vine.string().trim().minLength(6),
    genero: vine.string().trim().minLength(6),
    dataPublicacao: vine.date()
  })
)
