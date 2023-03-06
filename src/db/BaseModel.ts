import { Model } from 'objection';

import * as path from 'path';

export class BaseModel extends Model {
  readonly id: number;
  tableName: string;

  static modulePaths = [];
  static setModulePaths(modules: string[]) {
    this.modulePaths = modules;
  }

  static get modelPaths() {
    const root = path.join(__dirname, '../../../');
    console.log(root);
    console.log("conslo",__dirname)
    return BaseModel.modulePaths.map((m) => `${root}dist/src/${m}/Models`);
  }
}