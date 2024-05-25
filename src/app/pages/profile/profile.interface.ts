import { Job } from "../../interfaces/job.interface";
import { Skill } from "../../interfaces/skill.interface";
import { SkillsGroup } from "./components/skils-group/skills-group.interface";

export interface Profile {
  name: string;
  job: string;
  email: string;
  phone: string;
  city: string;
  azure_id: string;
  contact?: SkillsGroup;
  school?: SkillsGroup;
  jobs?: Job[];
  skills_groups?: SkillsGroup[];
}