export interface GroupMember {
  name: string;
  avatar?: string | boolean
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
      { name: 'Edward', isLeader: true },
      { name: 'Phoebe', isLeader: true },
      { name: '韓吉' },
      { name: 'Calvin Lin' },
      { name: '鯉魚' },
      { name: 'Jack' },
      { name: 'Licky', avatar: true },
      { name: 'FionnKuo', avatar: true }
    ]
  },
  {
    name: 'sponsorship',
    members: [
      { name: 'Licky', isLeader: true, avatar: true },
      { name: 'Kakashi' },
      { name: '韓吉' },
      { name: 'Eason Chen', avatar: 'EasonChen.png' }
    ]
  },
  {
    name: 'venue_management',
    members: [
      { name: 'Caesar', avatar: true }
    ]
  },
  {
    name: 'record',
    members: [
      { name: '孝玠', isLeader: true, avatar: '002.png' },
      { name: 'Calvin Lin' },
      { name: 'Sean', avatar: true }
    ]
  },
  {
    name: 'development',
    members: [
      { name: 'SerKo', isLeader: true, avatar: true },
      { name: 'Edward' },
      { name: '耿映翔', avatar: '001.png' }
    ]
  },
  {
    name: 'design',
    members: [
      { name: 'SerKo', isLeader: true, avatar: true },
      { name: 'Peizhen' },
      { name: '飄飄 Piao', avatar: 'Piao.png' },
      { name: 'Naldo' }
    ]
  },
  {
    name: 'public_relations',
    members: [
      { name: '耿映翔', isLeader: true, avatar: '001.png' },
      { name: 'Gobby', isLeader: true },
      { name: '韓吉' },
      { name: 'Dylan', avatar: true },
      { name: '呱呱' }
    ]
  },
  {
    name: 'human_resources',
    members: [
      { name: '韓吉', isLeader: true },
      { name: '耿映翔', avatar: '001.png' }
    ]
  }
]
