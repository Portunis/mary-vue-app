export default interface SkillsUserModel {
  uid: string;
  skills: Skills[];
}
interface Skills {
  id: number;
  name: string;
  stat: number;
  startStat: number;
}
