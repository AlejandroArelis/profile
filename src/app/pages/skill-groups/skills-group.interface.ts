import { Skill } from "../profile/components/skills-group/components/skill/skill.interface";

export interface SkillsGroup {
  id?: string;
  name: string;
  skills: Skill[];
}