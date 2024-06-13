import { Skill } from "../profile/components/skills-group/components/skill/skill.interface";

export interface SkillGroup {
  id?: string;
  name: string;
  skills: Skill[];
}