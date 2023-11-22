export interface GroupMember {
  name: string;
  avatar?: string
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
      { name: 'GTB', isLeader: true },
      { name: 'David' }
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
      { name: 'Licky' }
    ]
  },
  {
    name: 'sponsorship',
    members: [
      { name: 'Licky', isLeader: true },
      { name: 'Kakashi' },
      { name: '韓吉' },
      { name: 'Eason' }
    ]
  },
  {
    name: 'venue_management',
    members: [
      { name: 'Caesar' }
    ]
  },
  {
    name: 'photography',
    members: [
      { name: '孝玠', isLeader: true },
      { name: 'Calvin Lin' }
    ]
  },
  {
    name: 'development',
    members: [
      { name: 'SerKo', isLeader: true },
      { name: 'Edward' },
      { name: '耿映翔' }
    ]
  },
  {
    name: 'design',
    members: [
      { name: 'SerKo', isLeader: true },
      { name: 'Peizhen' },
      { name: 'ㄆㄆ' },
      { name: 'Naldo' }
    ]
  },
  {
    name: 'public_relations',
    members: [
      { name: '耿映翔', isLeader: true },
      { name: 'Gobby', isLeader: true },
      { name: '韓吉' },
      { name: 'Dylan' },
      { name: '呱呱' }
    ]
  },
  {
    name: 'human_resources',
    members: [
      { name: '韓吉', isLeader: true },
      { name: '耿映翔' }
    ]
  }
]
