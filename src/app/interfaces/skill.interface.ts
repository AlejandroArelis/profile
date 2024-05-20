export interface Skill {
  id?: number;
  icon?: {
    type: string;
    value: string;
  };
  value?: string;
  text: string;
  type: string;
  href?: string;
  progress?: {
    color: string;
    value: number;
  }
}