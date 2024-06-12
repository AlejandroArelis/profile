import { SkillsGroup } from "@pages/skill-groups/skills-group.interface";
import { Job } from "./components/job/job.interface";

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