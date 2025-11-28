import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(6),
    idade: vine.number(), 
    email: vine.string().trim().minLength(3)
  })
)

/**
 * Validates the post's update action
 */
export const updateUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(6),
    idade: vine.number(), 
    email: vine.string().trim().minLength(3)
  })
)
