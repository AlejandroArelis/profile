export class FilePath{
  id: string;
  name:string;
  children?: FilePath[];

  constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
}