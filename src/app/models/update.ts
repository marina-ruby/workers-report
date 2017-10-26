import { User } from './user';
import { Task } from './task';
import { Alias, AppModel } from 'tsmodels';

export class Update extends AppModel {
  @Alias('id') public id: number;
  @Alias('owner') public owner: User;
  @Alias('created_at') public createdAt: Date;
  @Alias('have_done') public haveDone: Task[];
  @Alias('todo') public toDo: Task[];
  @Alias('problems') public problems?: string;
  @Alias('deadline') public deadline: boolean;
  @Alias('reason') public reason?: string;
}

