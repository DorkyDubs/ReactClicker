export let cookieUpgrades = [
  {
    id: 1,
    name: "Weekend Biscuit Intern",
    cost: 100,
    toIncrease: 1,

    increaseFunction: function increase(currentCPS) {
      let newCPS = currentCPS + 10;
      return newCPS;
    },
  },
  {
    id: 2,
    name: "Parttime Biscuit Casual",
    cost: 1000,
    toIncrease: 10,

    increaseFunction: function increase(currentCPS) {
      let newCPS = currentCPS + 10;
      return newCPS;
    },
  },
  {
    id: 3,
    name: "Biscuit Apprentice",
    cost: 10000,
    toIncrease: 100,

    increaseFunction: function increase(currentCPS) {
      let newCPS = currentCPS + 100;
      return newCPS;
    },
  },

  {
    id: 4,
    name: "Basic Biscuit Chef ",
    cost: 10000,
    toIncrease: 1000,

    increaseFunction: function increase(currentCPS) {
      let newCPS = currentCPS + 1000;
      return newCPS;
    },
  },

  {
    id: 5,
    name: "Biscuit consultant",
    cost: 100000,
    toIncrease: 10000,

    increaseFunction: function increase(currentCPS) {
      let newCPS = currentCPS + 10000;
      return newCPS;
    },
  },

  {
    id: 6,
    name: "Michelin ⭐ Biscuit Chef",
    cost: 1000000,
    toIncrease: 100000,

    increaseFunction: function increase(currentCPS) {
      let newCPS = currentCPS + 100000;
      return newCPS;
    },
  },
];
