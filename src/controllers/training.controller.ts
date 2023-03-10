import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Exercise, List, User } from '@prisma/client';
import { TrainingService } from 'src/services/training.service';

@Controller('v1')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  //Trás todas as informações do usuario (brings the user information)
  @Get('about/:about')
  async about(@Param('id') id: string): Promise<User | null> {
    return this.trainingService.about(id);
  }

  //Delete a conta do usuario (Delete user account)
  @Delete('delete_user/:id')
  async Delete(@Param('id') id: string): Promise<User> {
    return this.trainingService.delete_user(id);
  }

  //Salva as informações do usuario
  @Post('user')
  async create_user(@Body() body: User) {
    return this.trainingService.create_user(body);
  }
  /*
  
  
  
  */

  //Cria lista de treino (Create training list)
  @Post('list')
  async create_list(@Body() body: List): Promise<List> {
    return this.trainingService.create_list(body);
  }

  //Trás a lista de exercicios criados pelo usuario (Bring the list of exercises created by the user)
  @Get('list_exercise/:user')
  async training(@Param('user') user: string): Promise<List[]> {
    return this.trainingService.training(user);
  }

  //Delete lista de exercicio (Delete list of exercises)
  @Delete('delete_list/:id')
  async delete_list(@Param('id') id: string): Promise<List> {
    return this.trainingService.delete_list(id);
  }

  //Cria treino (Create training)
  @Post('exercise')
  async create_training(@Body() body: Exercise): Promise<Exercise> {
    return this.trainingService.create_training(body);
  }

  //Trás os exercicios criado pelo usuario (Bring the exercise create by the user)
  @Get('list_training/:user')
  async list_training(@Param('user') user: string): Promise<Exercise[]> {
    return this.trainingService.list_training(user);
  }

  //Delete exercicio (Delete exercises)
  @Delete('delete_exercise/:id')
  async delete_training(@Param('id') id: string): Promise<Exercise> {
    return this.trainingService.delete_training(id);
  }

  // //Atualiza a lista de exercicios (Updates the list of exercises)
  // @Put('updateexercise/:id')
  // async update_training(@Param('id') id: string): Promise<Excersise> {
  //   return this.trainingService.update_training(id);
  // }

  // //Atualiza nome da lista de exercicios (update name list of exercises)
  // @Put('updatelist/:id')
  // async update_list(@Param('id') id: string): Promise<List> {
  //   return this.trainingService.update_list(id);
  // }
}
