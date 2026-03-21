import { expect, describe, it } from 'vitest'
import { RegisterServices } from './register-service.js'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository.js'
import { UserAlreadyExistsError } from './errors/user-already-exist-error.js'

describe('Register Use Case', () => {
  it('should be able to register', async () => {
    const usersRepositoryInMemory = new InMemoryUsersRepository()
    const registerService = new RegisterServices(usersRepositoryInMemory)

    const { user } = await registerService.register({
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const usersRepositoryInMemory = new InMemoryUsersRepository()
    const registerService = new RegisterServices(usersRepositoryInMemory)

    const { user } = await registerService.register({
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const usersRepositoryInMemory = new InMemoryUsersRepository()
    const registerService = new RegisterServices(usersRepositoryInMemory)

    const email = 'jonhdoe@example.com'

    await registerService.register({
      name: 'Jonh Doe',
      email,
      password: '123456',
    })

    await expect(() =>
      registerService.register({
        name: 'Jonh Doe',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
