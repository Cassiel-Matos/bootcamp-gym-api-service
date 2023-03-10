import { Injectable } from '@nestjs/common';
import { Exercise, List, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TrainingService {
  constructor(private prisma: PrismaService) {}

  //Trás todas as informações do usuario (brings the user information)
  async about(email: string): Promise<User> {
    const about = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return about;
  }

  //Deleta conta de usuario (Delete account user)
  async delete_user(id: string): Promise<User> {
    console.log(id);

    const delete_user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return delete_user;
  }

  //Salva as informações do usuario
  async create_user(body) {
    console.log(body);

    const findUser = await this.prisma.user.findFirst({
      where: {
        id: body.id,
      },
    });

    if (findUser)
      return {
        message: 'success',
      };

    const create_user = await this.prisma.user.create({
      data: {
        id: body.id,
        name: body.given_name,
        email: body.email,
        picture: body.picture,
      },
    });

    if (create_user)
      return {
        message: 'success',
      };

    return {
      message: 'fail',
    };
  }

  /*




*/
  //Criar exercicio (Create exercise )
  async create_list(body: List): Promise<List> {
    const create_list = await this.prisma.list.create({
      data: body,
    });
    return create_list;
  }

  //Deleta lista de treino do usuario (delete user training list)
  async delete_list(id: string): Promise<List> {
    const delete_training = await this.prisma.list.delete({
      where: {
        id,
      },
    });
    return delete_training;
  }

  //Criar exercicio (Create exercise )
  async create_training(body: Exercise): Promise<Exercise> {
    const create_training = await this.prisma.exercise.create({
      data: body,
    });

    return create_training;
  }

  //Trás a lista de exercicios criados pelo usuario (Bring the list of exercises created by the user)
  async training(user: string): Promise<List[]> {
    const list = await this.prisma.list.findMany({
      where: {
        userId: user,
      },
    });
    return list;
  }

  //Trás os exercicios criado pelo usuario (Bring the exercise create by the user)
  async list_training(user: string): Promise<Exercise[]> {
    const list_training = await this.prisma.exercise.findMany({
      where: {
        userId: user,
      },
    });
    return list_training;
  }

  //Deleta exercicio criado (delete excercise)
  async delete_training(id: string): Promise<Exercise> {
    const delete_training = await this.prisma.exercise.delete({
      where: {
        id,
      },
    });
    return delete_training;
  }

  // //Atualiza nome da lista de exercicios (update name list)
  // async update_list(id: string): Promise<List> {
  //   const update_list = await this.prisma.list.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       name: 'sexta',
  //     },
  //   });
  //   return update_list;
  // }

  // //Altera as informações do exercicio (Change exercises information)
  // async update_training(id: string): Promise<Excersise> {
  //   const update_training = await this.prisma.excersise.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       name: 'antimateria',
  //     },
  //   });
  //   return update_training;
  // }
}
