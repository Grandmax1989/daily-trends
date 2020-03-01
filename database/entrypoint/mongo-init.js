db.auth('admin', 'fHYmOGIIsjBxbvcp')

db = db.getSiblingDB('daily-trends')

db.createUser({
  user: 'dailyUser',
  pwd: 'wSdPIchNyR8F09QH',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

db.createCollection('Feed');