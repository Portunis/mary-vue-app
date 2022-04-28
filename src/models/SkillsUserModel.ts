export default interface SkillsUserModel {
  uid: string;
  skills: Array<Skills>;
}
interface Skills {
  id: number;
  name: string;
  stat: number;
  startStat: number;
}
