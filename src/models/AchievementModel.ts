export default interface AchievementModel {
  uid: string;
  achievements: Achievement[];
}
interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  got_achievement: number;
  image: string;
}
