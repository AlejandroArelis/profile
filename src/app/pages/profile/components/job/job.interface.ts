export interface Job {
  title: string;
  company: string;
  location: string;
  start_date:string;
  end_date:string;
  proyects?: Proyect[];
}

interface Proyect {
  title: string;
  description: string;
}