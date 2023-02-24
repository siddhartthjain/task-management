import { task_contract } from 'src/tasks/repositories/contract';
// import { RepositoryContract } from './db/repository/contract';

export function InjectModel(model: any) {
  return function (target: task_contract, key: string | symbol) {
    Object.assign(target, {
      [key]: model,
    });
  };
}