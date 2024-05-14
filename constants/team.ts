export interface GroupMember {
  name: string;
  avatar?: string | boolean;
  remark?: string;
  isLeader?: boolean;
}

export interface Group {
  name: string;
  members: GroupMember[];
  isRecruiting?: boolean;
}

export const groups: Group[] = [
  {
    name: 'general_coordinator',
    members: [
      { name: 'GTB', isLeader: true, avatar: true },
      { name: 'David Chou', avatar: 'DavidChou.png' }
    ]
  },
  {
    name: 'agenda',
    members: [
      { name: 'David Chou', isLeader: true, avatar: 'DavidChou.png' },
      { name: '韓吉', avatar: 'hanji.png' },
      { name: 'Calvin Huang' },
      { name: 'Jack', avatar: 'Jack.png' },
      { name: 'Mark', avatar: 'Mark.png' },
      { name: 'Licky', avatar: true },
      { name: 'FionnKuo', avatar: true },
      { name: 'Connie', avatar: 'Connie.png' },
      { name: 'Lois', avatar: 'Lois.png' }
    ]
  },
  {
    name: 'sponsorship',
    members: [
      { name: 'Licky', isLeader: true, avatar: true },
      { name: 'Kakashi', avatar: 'Kakashi.png' },
      { name: 'Eason Chen', avatar: 'EasonChen.png' },
      { name: '梯口' },
      { name: '韓吉', avatar: 'hanji.png' }
    ]
  },
  {
    name: 'venue_management',
    members: [
      { name: 'GTB', isLeader: true, avatar: true },
      { name: 'Caesar', avatar: true },
      { name: '楓舞', avatar: 'Maple.png' },
      { name: '梯口' },
      { name: 'Kevin Yang', avatar: 'KevinYang.png' },
      { name: 'min', avatar: 'min.png' },
      { name: 'Mia', avatar: 'mia.png' },
      { name: 'YT' },
      { name: 'Kettan', avatar: 'Kettan.png' },
      { name: 'Luffy' },
      { name: 'Steven Chang', avatar: 'StevenChang.png' }
    ]
  },
  {
    name: 'record',
    members: [
      { name: '孝玠', isLeader: true, avatar: '002.png' },
      { name: 'Calvin Huang' },
      { name: 'Sean', avatar: true }
    ]
  },
  {
    name: 'development',
    members: [
      { name: 'SerKo', isLeader: true, avatar: true },
      { name: '耿映翔', avatar: '001.png' }
    ]
  },
  {
    name: 'design',
    members: [
      { name: 'SerKo', isLeader: true, avatar: true },
      { name: '飄飄 Piao', avatar: 'Piao.png' },
      { name: 'Naldo', avatar: 'Naldo.png' }
    ]
  },
  {
    name: 'public_relations',
    members: [
      { name: '耿映翔', isLeader: true, avatar: '001.png' },
      { name: 'Gobby', isLeader: true, avatar: 'Gobby.png' },
      { name: '韓吉', avatar: 'hanji.png' },
      { name: 'Dylan', avatar: true },
      { name: '呱呱', avatar: 'duck.png' },
      { name: 'hsiang', avatar: 'hsiang.png' }
    ]
  },
  {
    name: 'human_resources',
    members: [
      { name: '韓吉', isLeader: true, avatar: 'hanji.png' },
      { name: '耿映翔', avatar: '001.png' }
    ]
  }
]
