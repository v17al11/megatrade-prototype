export const liveTrades = [
  {
    id: 1,
    traderA: {
      name: 'staffnet',
      clan: 'Alpha Forge',
      avatar: 'https://i.pravatar.cc/120?img=12',
      items: [
        { name: 'Mythic Streamer Pack', rarity: 'Legendary', art: 'https://dummyimage.com/180x240/7c5cff/ffffff&text=Legendary+Pack' },
        { name: 'Mythic Streamer Pack', rarity: 'Legendary', art: 'https://dummyimage.com/180x240/7c5cff/ffffff&text=Legendary+Pack' },
      ],
    },
    traderB: {
      name: 'pessiqa',
      clan: 'Shadow Syndicate',
      avatar: 'https://i.pravatar.cc/120?img=15',
      items: [
        { name: 'Quantum Brainrot', rarity: 'Epic', art: 'https://dummyimage.com/180x240/ff5e5e/ffffff&text=Brainrot+Pack' },
      ],
    },
    timestamp: '2m ago',
    type: 'player',
  },
  {
    id: 2,
    traderA: {
      name: 'seaspirit',
      clan: 'Waves Co.',
      avatar: 'https://i.pravatar.cc/120?img=9',
      items: [
        { name: 'Neon Loot Coin', rarity: 'Rare', art: 'https://dummyimage.com/160x160/ffb800/000&text=Coin+50' },
        { name: 'Neon Loot Coin', rarity: 'Rare', art: 'https://dummyimage.com/160x160/ffb800/000&text=Coin+50' },
      ],
    },
    traderB: {
      name: 'solidbasalt',
      clan: 'Clanless',
      avatar: 'https://i.pravatar.cc/120?img=21',
      items: [
        { name: 'Creator Pack', rarity: 'Epic', art: 'https://dummyimage.com/180x240/38bdf8/ffffff&text=Creator+Pack' },
      ],
    },
    timestamp: '34m ago',
    type: 'clan',
  },
  {
    id: 3,
    traderA: {
      name: 'mintedfox',
      clan: 'Pixel Guild',
      avatar: 'https://i.pravatar.cc/120?img=5',
      items: [
        { name: 'Streamer Coin 25', rarity: 'Uncommon', art: 'https://dummyimage.com/160x160/f97316/000&text=Coin+25' },
      ],
    },
    traderB: {
      name: 'lorekeeper',
      clan: 'Archivists',
      avatar: 'https://i.pravatar.cc/120?img=17',
      items: [
        { name: 'Arcade Fan Pack', rarity: 'Rare', art: '/assets/packs/arcade-pack.png' },
      ],
    },
    timestamp: '1h ago',
    type: 'player',
  },
];

export const topCollectors = [
  { rank: 1, name: 'fanredcat2', total: 482 },
  { rank: 2, name: 'lolpop', total: 451 },
  { rank: 3, name: 'zartemad', total: 438 },
  { rank: 4, name: 'bustamarios', total: 417 },
  { rank: 5, name: 'theredgem', total: 394 },
];

export const onlineUsers = {
  active: [
    { name: 'millybz23', status: 'live' },
    { name: 'neonluke', status: 'live' },
    { name: 'famecat2', status: 'idle' },
    { name: 'pasha000', status: 'idle' },
  ],
  recent: [
    { name: 'staffnet', status: 'offline' },
    { name: 'chr1smagic', status: 'offline' },
    { name: 'apexpixel', status: 'offline' },
  ],
};

export const auctionLots = [
  {
    id: 'AUC-1052',
    title: 'Legendary Streamer Bundle',
    rarity: 'Legendary',
    timeLeft: '02:45:32',
    currentBid: 185,
    bids: [
      { bidder: 'seaspirit', amount: 185, time: 'Just now' },
      { bidder: 'fanredcat2', amount: 150, time: '10 min ago' },
      { bidder: 'staffnet', amount: 120, time: '28 min ago' },
    ],
    minIncrement: 10,
    watchers: 68,
    image: 'https://dummyimage.com/180x240/7c5cff/ffffff&text=Legendary+Pack',
  },
  {
    id: 'AUC-1044',
    title: 'Neon Creator Coin #07',
    rarity: 'Epic',
    timeLeft: '00:23:15',
    currentBid: 76,
    bids: [
      { bidder: 'pessiqa', amount: 76, time: '2 min ago' },
      { bidder: 'mintedfox', amount: 70, time: '6 min ago' },
      { bidder: 'lorekeeper', amount: 60, time: '15 min ago' },
    ],
    minIncrement: 5,
    watchers: 41,
    image: 'https://dummyimage.com/160x160/ffb800/000&text=Coin+50',
  },
  {
    id: 'AUC-1031',
    title: 'Brainrot Booster Set',
    rarity: 'Rare',
    timeLeft: 'Closed',
    currentBid: 92,
    bids: [
      { bidder: 'staffnet', amount: 92, time: 'Winner' },
      { bidder: 'fanredcat2', amount: 88, time: '5 min before close' },
      { bidder: 'lolpop', amount: 80, time: '12 min before close' },
    ],
    minIncrement: 5,
    watchers: 103,
    image: 'https://dummyimage.com/180x240/ff5e5e/ffffff&text=Brainrot+Pack',
  },
];

export const questTracks = [
  {
    id: 'daily',
    title: 'Daily Hustle',
    progress: 4,
    total: 6,
    reward: 'Mini Creator Pack',
    quests: [
      { title: 'Complete 3 trades', progress: 2, total: 3, reward: '+150 XP', type: 'trade' },
      { title: 'Spin the roulette', progress: 1, total: 1, reward: '+50 XP', type: 'roulette', completed: true },
      { title: 'Claim daily bonus', progress: 1, total: 1, reward: '+1 Loot Pack', type: 'bonus', completed: true },
      { title: 'Craft an item in market', progress: 0, total: 1, reward: '+75 XP', type: 'craft' },
    ],
  },
  {
    id: 'weekly',
    title: 'Collection Mastery',
    progress: 18,
    total: 25,
    reward: 'Animated Profile Frame',
    quests: [
      { title: 'Collect 25 rare cards', progress: 18, total: 25, reward: 'Rare Pack', type: 'collect' },
      { title: 'Win 3 auctions', progress: 1, total: 3, reward: 'Epic Coin', type: 'auction' },
      { title: 'Invite 2 friends', progress: 1, total: 2, reward: 'Loot Packs x2', type: 'social' },
    ],
  },
  {
    id: 'seasonal',
    title: 'Season 3 — Neon Ascendancy',
    progress: 72,
    total: 100,
    reward: 'Mythic Trove Bundle',
    quests: [
      { title: 'Reach top 50 collectors', progress: 1, total: 1, reward: 'Mythic Badge', type: 'rank', completed: true },
      { title: 'Complete 10 clan trades', progress: 7, total: 10, reward: 'Clan Banner', type: 'clan' },
      { title: 'Earn 20,000 XP', progress: 12.4, total: 20, reward: 'Profile Theme', type: 'xp' },
    ],
  },
];

export const achievementShowcase = [
  { id: 'achv-1', name: 'Auction Shark', description: 'Win 25 auctions in a season', points: 250, rarity: 'Legendary' },
  { id: 'achv-2', name: 'Clan Architect', description: 'Found a clan with 20+ members', points: 180, rarity: 'Epic' },
  { id: 'achv-3', name: 'Collection Virtuoso', description: 'Own every Season 3 card', points: 350, rarity: 'Mythic' },
];

export const profileThemes = [
  {
    id: 'neo-nebula',
    name: 'Neo Nebula',
    preview: 'linear-gradient(135deg, rgba(124,92,255,0.75), rgba(37,99,235,0.65))',
    description: 'Animated starfield with drifting nebula pulses.',
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    preview: 'linear-gradient(135deg, rgba(255,121,63,0.75), rgba(255,94,174,0.7))',
    description: 'Warm orange-pink transitions with slow shimmer.',
  },
  {
    id: 'pixel-oasis',
    name: 'Pixel Oasis',
    preview: 'linear-gradient(135deg, rgba(16,185,129,0.75), rgba(59,130,246,0.75))',
    description: 'Retro pixel palm silhouettes and parallax dunes.',
  },
];

export const avatarFrames = [
  {
    id: 'glow-purple',
    name: 'Mythic Pulse',
    className: 'glow-purple',
    description: 'Violet pulse with orbiting sparks and subtle glitter.',
  },
  {
    id: 'glow-gold',
    name: 'Solar Champion',
    className: 'glow-gold',
    description: 'Golden cascade with celebratory particles.',
  },
  {
    id: 'neon-cyan',
    name: 'Cyber Runner',
    className: 'neon-cyan',
    description: 'Electric cyan arcs with scanning beam.',
  },
];

export const spotlightCards = [
  { id: 'card-1', name: 'Cyber Oni', rarity: 'Legendary', image: 'https://dummyimage.com/200x260/9333ea/ffffff&text=Cyber+Oni' },
  { id: 'card-2', name: 'Pixel Siren', rarity: 'Epic', image: 'https://dummyimage.com/200x260/f97316/ffffff&text=Pixel+Siren' },
  { id: 'card-3', name: 'Streamer OG', rarity: 'Rare', image: 'https://dummyimage.com/200x260/22d3ee/000&text=Streamer+OG' },
];

export const clanLeaderboard = [
  { rank: 1, clan: 'Alpha Forge', members: 48, rating: 9820, bonuses: '+12% crafting yield' },
  { rank: 2, clan: 'Shadow Syndicate', members: 37, rating: 9415, bonuses: '+8% auction boost' },
  { rank: 3, clan: 'Pixel Guild', members: 52, rating: 9090, bonuses: '+5% daily spins' },
  { rank: 4, clan: 'Waves Co.', members: 29, rating: 8650, bonuses: '+10% trade XP' },
  { rank: 5, clan: 'Mythic Bazaar', members: 35, rating: 8425, bonuses: '+6% loot chance' },
];

export const clanTrades = [
  {
    id: 'trade-201',
    clan: 'Alpha Forge vs Shadow Syndicate',
    summary: 'Mythic Streamer Pack for Neon Creator Coin',
    time: '5m ago',
    impact: '+120 clan XP',
  },
  {
    id: 'trade-198',
    clan: 'Pixel Guild vs Waves Co.',
    summary: '3x Pixel Siren cards for Cyber Oni',
    time: '18m ago',
    impact: '+85 clan XP',
  },
  {
    id: 'trade-188',
    clan: 'Mythic Bazaar vs Alpha Forge',
    summary: '2x Creator Packs for 500 clan credits',
    time: '45m ago',
    impact: '+65 clan XP',
  },
];

export const clanRooms = [
  {
    id: 'room-12',
    name: 'Alpha Forge — Mythic Forge',
    description: 'Elite auction room for high-tier drops. Clan-only access.',
    onlineMembers: 18,
    featuredItem: 'Mythic Streamer Pack',
    status: 'Live bidding',
  },
  {
    id: 'room-9',
    name: 'Shadow Syndicate — Backchannel',
    description: 'Secret swaps and exclusive codes.',
    onlineMembers: 11,
    featuredItem: 'Encrypted Creator Coin',
    status: 'Negotiations',
  },
  {
    id: 'room-7',
    name: 'Pixel Guild — Retro Hub',
    description: 'Arcade-themed trades & retro skins.',
    onlineMembers: 9,
    featuredItem: 'Pixel Siren card set',
    status: 'Trading party',
  },
];
