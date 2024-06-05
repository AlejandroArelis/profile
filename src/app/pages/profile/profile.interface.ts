import { Job } from "../../interfaces/job.interface";
import { Skill } from "../../interfaces/skill.interface";
import { SkillsGroup } from "./components/skils-group/skills-group.interface";

export interface Profile {
  id: string;
  name: string;
  job?: string;
  email: string;
  phone?: string;
  city?: string;
  degree?: string;
  school?: string;
  azure_id: string;
  user_name?: string;
  jobs?: Job[];
  skills_groups?: SkillsGroup[];
}