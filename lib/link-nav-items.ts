import { BookMarked, Dumbbell, type LucideIcon } from 'lucide-react';

export type LinkNavItem = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  gridClass?: string;
};

export const linkNavItems: LinkNavItem[] = [
  {
    title: '周期化力量训练',
    href: 'https://ahjindeg.github.io/dist/periodization/index.html',
    description:
      '练三休一，6 周约 11 轮。输入基准组与处方，自动计算 e1RM 与完整计划。',
    icon: Dumbbell,
    gridClass: 'lg:col-start-2 lg:row-start-1',
  },
  {
    title: '微信读书划线随览',
    href: 'https://ahjindeg.github.io/dist/weread/highlights.html',
    description: '浏览、筛选与随机翻阅微信读书划线记录。',
    icon: BookMarked,
    gridClass: 'lg:col-start-2 lg:row-start-2',
  },
];
