let mongoose = require("mongoose");
let charDb = require("./models/character");
let userDb = require("./models/user");

mongoose.connect("mongodb://localhost/xivtracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let characterSeed = [
    {
        charId: 1566747,
        charName: "Tomac Eagleborne",
        charServer: "Ultros",
        charAvatar: "https://img2.finalfantasyxiv.com/f/8dbb58f2a1092262b2c333833da92911_c514cdcdb619439df97d906d4434ccc6fc0_96x96.jpg?1611141537",
        charPortrait: "https://img2.finalfantasyxiv.com/f/8dbb58f2a1092262b2c333833da92911_c514cdcdb619439df97d906d4434ccc6fl0_640x873.jpg?1610951417",
        charClasses: [{
            classjobName: "Warrior",
            classjobLevel: 1,
            currentExp: 0,
            maxExp: 100}],
        achievementCount: 0,
        achievementPoints: 0,
        minionCount: 206,
        mountCount: 54,
        dateUpdated: Date.now()
    }
];

let userSeed = [
  {
    userIdentity: "test",
    savedCharacters: [
      1566747
    ]
  }
];

charDb.Character.deleteMany({})
  .then(() => charDb.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  userDb.User.deleteMany({})
  .then(() => userDb.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
