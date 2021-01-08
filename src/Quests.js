import rawData from './data/quests.json';

export const QuestObjective = {
  Find: 'Find',
  Kill: 'Kill',
};

export const Traders = {
  '54cb50c76803fa8b248b4571': {
    id: '54cb50c76803fa8b248b4571',
    name: 'Prapor',
  },
  '54cb57776803fa99248b456e': {
    id: '54cb57776803fa99248b456e',
    name: 'Therapist',
  },
  '58330581ace78e27b8b10cee': {
    id: '58330581ace78e27b8b10cee',
    name: 'Skier',
  },
  '5935c25fb3acc3127c3d8cd9': {
    id: '5935c25fb3acc3127c3d8cd9',
    name: 'Peacekeeper',
  },
  '5a7c2eca46aef81a7ca2145d': {
    id: '5a7c2eca46aef81a7ca2145d',
    name: 'Mechanic',
  },
  '5ac3b934156ae10c4430e83c': {
    id: '5ac3b934156ae10c4430e83c',
    name: 'Ragman',
  },
  '5c0647fdd443bc2504c2d371': {
    id: '5c0647fdd443bc2504c2d371',
    name: 'Jaeger',
  },
  '579dc571d53a0658a154fbec': {
    id: '579dc571d53a0658a154fbec',
    name: 'Fence',
  },
};

export const Maps = {
  Shorline: {
    id: 'Shorline',
    name: 'Shorline',
  },
};

export const Quests = rawData.data.map((questData) => {
  return {
    id: questData.id,
    name: questData.name,
    wikiLink: 'https://escapefromtarkov.gamepedia.com/The_Punisher_-_Part_2',
    giver: Traders[questData.traderId],
    objectives: questData.items.map((itemData) => {
      return {
        type: QuestObjective.Find,
        amount: itemData.count,
        findInRaid: itemData.foundInRaid,
        targetId: itemData.id,
      };
    }),
  };
});

export default Quests;