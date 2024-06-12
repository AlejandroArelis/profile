export interface Skill {
  id?: number;
  icon?: {
    type: string;
    value: string;
  };
  value?: string;
  text: string;
  progress?: {
    color: string;
    value: number;
  }
}