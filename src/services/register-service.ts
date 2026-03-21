import { UsersRepository } from '@/repositories/users-repository.js'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exist-error.js'
import { User } from '@prisma/client'

interface RegisterServiceRequest {
  email: string
  name: string
  password: string
}

interface RegisterUseCaseRequest {
  user: User
}

export class RegisterServices {
  constructor(private usersRepository: UsersRepository) {}

  async register({
    email,
    name,
    password,
  }: RegisterServiceRequest): Promise<RegisterUseCaseRequest> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const password_hash = await hash(password, 6)

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return { user }
  }
}
