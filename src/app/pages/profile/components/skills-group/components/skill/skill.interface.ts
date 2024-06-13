export interface Skill {
  id?: string;
  name?: string;
  skill_group?: string;
  icon?: {
    type: string;
    value: string;
  };
  value?: string;
  text?: string;
  progress?: {
    color: string;
    value: number;
  };
}
