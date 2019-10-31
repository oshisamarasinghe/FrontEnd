interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'Data Pre-processing'
  },
  {
    name: 'Data Cleaning',
    url: '/upload-file',
    icon: 'icon-drop'
  },
  {
    name: 'Multiple Sequence Alignment',
    url: '/upload-file',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Phylogenetic Inference'
  },
  {
    name: 'Tree Generation',
    url: '/upload-file',
    icon: 'icon-settings',
  },
  {
    name: 'Recommendation',
    url: '/upload-file',
    icon: 'icon-puzzle',
  },
  {
    title: true,
    name: 'Tree Visualization'
  },
  {
    name: 'Tree Visualization',
    url: '/view-tree',
    icon: 'icon-graph',
  }
];
