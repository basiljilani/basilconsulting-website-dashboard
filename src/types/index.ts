export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  avatar?: string;
}

export interface DashboardStats {
  visitors: number;
  pageViews: number;
  subscribers: number;
  blogPosts: number;
}

export interface MenuItem {
  title: string;
  path: string;
  icon: React.ComponentType;
}