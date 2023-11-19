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
    name: '',
    members: [
      { name: 'GTB', isLeader: true, remark: '總召' },
      { name: 'David', remark: '副總召' }
    ]
  },
  {
    name: '議程組',
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
    name: '贊助組',
    members: [
      { name: 'Licky', isLeader: true },
      { name: 'Kakashi' },
      { name: '韓吉' },
      { name: 'Eason' }
    ]
  },
  {
    name: '場務組',
    isRecruiting: true,
    members: [
      { name: 'Caesar' }
    ]
  },
  {
    name: '攝影組',
    members: [
      { name: '孝玠', isLeader: true },
      { name: 'Calvin Lin' }
    ]
  },
  {
    name: '開發組',
    members: [
      { name: 'SerKo', isLeader: true },
      { name: 'Edward' },
      { name: '耿映翔' }
    ]
  },
  {
    name: '設計組',
    members: [
      { name: 'SerKo', isLeader: true },
      { name: 'Peizhen' },
      { name: 'ㄆㄆ' },
      { name: 'Naldo' }
    ]
  },
  {
    name: '公關組',
    members: [
      { name: '耿映翔', isLeader: true },
      { name: 'Gobby', isLeader: true },
      { name: '韓吉' },
      { name: 'Dylan' },
      { name: '呱呱' }
    ]
  },
  {
    name: 'HR 組',
    members: [
      { name: '韓吉', isLeader: true },
      { name: '耿映翔' }
    ]
  }
]
