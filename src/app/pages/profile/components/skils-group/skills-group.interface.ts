import { Skill } from "../../../../interfaces/skill.interface";

export interface SkillsGroup {
  id?: number;
  name: string;
  skills: Skill[];
}