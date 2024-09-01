import AppError from '@shared/errors/appError';
import { UsersRepository } from '../typeorm/repositories/usersRepository';
import User from '../typeorm/entities/user';
import { hash } from 'bcryptjs';
enum Role {
  gestante = 'gestante',
  medico = 'medico',
}
interface MedicoDTO {
  nome: string;
  email: string;
  password: string;
  role: Role;
  crm: string;
}
interface Gestante2DTO {
  nome: string;
  email: string;
  password: string;
  role: Role;
  dataNascimento: Date;
  idmedico: string;
}
class CadastrarUserService {
  private usersRepository = UsersRepository;

  public async execute(data: MedicoDTO | Gestante2DTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }
    const hashedPassword = await hash(data.password, 8);
    let user;
    if (data.role == 'gestante') {
      const gestanteData = data as Gestante2DTO;
      const medico = await this.usersRepository.findById(gestanteData.idmedico);
      if (!medico) {
        throw new AppError('Medico not found', 404);
      }
      user = this.usersRepository.create({
        nome: gestanteData.nome,
        email: gestanteData.email,
        role: gestanteData.role,
        dataNascimento: gestanteData.dataNascimento,
        password: hashedPassword,
        medico,
      });
    } else {
      const medicoData = data as MedicoDTO;
      user = this.usersRepository.create({
        nome: medicoData.nome,
        email: medicoData.email,
        role: medicoData.role,
        crm: medicoData.crm,
        password: hashedPassword,
      });
    }

    await this.usersRepository.save(user);

    return user;
  }
}

export default CadastrarUserService;
