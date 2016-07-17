
Types = {
    Messages: {
        HELLO: 0,
        WELCOME: 1,
        SPAWN: 2,
        DESPAWN: 3,
        MOVE: 4,
        LOOTMOVE: 5,
        AGGRO: 6,
        ATTACK: 7,
        HIT: 8,
        HURT: 9,
        HEALTH: 10,
        CHAT: 11,
        LOOT: 12,
        EQUIP: 13,
        DROP: 14,
        TELEPORT: 15,
        DAMAGE: 16,
        POPULATION: 17,
        KILL: 18,
        LIST: 19,
        WHO: 20,
        ZONE: 21,
        DESTROY: 22,
        HP: 23,
        BLINK: 24,
        OPEN: 25,
        CHECK: 26
    },
    
    Entities: {
        WARRIOR: 1,
        
        // Mobs
        RAT: 2,
        SKELETON: 3,
        GOBLIN: 4,
        OGRE: 5,
        SPECTRE: 6,
        CRAB: 7,
        BAT: 8,
        WIZARD: 9,
        EYE: 10,
        SNAKE: 11,
        SKELETON2: 12,
        BOSS: 13,
        DEATHKNIGHT: 14,
        
        // Armors
        FIREFOX: 20,
        CLOTHARMOR: 21,
        LEATHERARMOR: 22,
        MAILARMOR: 23,
        PLATEARMOR: 24,
        REDARMOR: 25,
        GOLDENARMOR: 26,
        
        // Objects
        FLASK: 35,
        BURGER: 36,
        CHEST: 37,
        FIREPOTION: 38,
        CAKE: 39,
        
        // NPCs
        GUARD: 40,
        KING: 41,
        OCTOCAT: 42,
        VILLAGEGIRL: 43,
        VILLAGER: 44,
        PRIEST: 45,
        SCIENTIST: 46,
        AGENT: 47,
        RICK: 48,
        NYAN: 49,
        SORCERER: 50,
        BEACHNPC: 51,
        FORESTNPC: 52,
        DESERTNPC: 53,
        LAVANPC: 54,
        CODER: 55,
        
        // Weapons
        SWORD1: 60,
        SWORD2: 61,
        REDSWORD: 62,
        GOLDENSWORD: 63,
        MORNINGSTAR: 64,
        AXE: 65,
        BLUESWORD: 66
    },
    
    Orientations: {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    }
};

var kinds = {
    warrior: [Types.Entities.WARRIOR, "player", "warrior"],
    
    rat: [Types.Entities.RAT, "mob", "mouse"],
    skeleton: [Types.Entities.SKELETON , "mob", "rat"],
    goblin: [Types.Entities.GOBLIN, "mob", "bee"],
    ogre: [Types.Entities.OGRE, "mob", "scorpion"],
    spectre: [Types.Entities.SPECTRE, "mob", "spectre"],
    deathknight: [Types.Entities.DEATHKNIGHT, "mob", "human"],
    crab: [Types.Entities.CRAB, "mob", "crab"],
    snake: [Types.Entities.SNAKE, "mob", "snake"],
    bat: [Types.Entities.BAT, "mob", "bat"],
    wizard: [Types.Entities.WIZARD, "mob", "wizard"],
    eye: [Types.Entities.EYE, "mob", "eye"],
    skeleton2: [Types.Entities.SKELETON2, "mob", "squirrel"],
    boss: [Types.Entities.BOSS, "mob", "committee"],

    sword1: [Types.Entities.SWORD1, "weapon", "sword1"],
    sword2: [Types.Entities.SWORD2, "weapon", "sword2"],
    axe: [Types.Entities.AXE, "weapon", "axe"],
    redsword: [Types.Entities.REDSWORD, "weapon", "redsword"],
    bluesword: [Types.Entities.BLUESWORD, "weapon", "bluesword"],
    goldensword: [Types.Entities.GOLDENSWORD, "weapon", "goldensword"],
    morningstar: [Types.Entities.MORNINGSTAR, "weapon", "morningstar"],
    
    firefox: [Types.Entities.FIREFOX, "armor", "firefox"],
    clotharmor: [Types.Entities.CLOTHARMOR, "armor", "clotharmor"],
    leatherarmor: [Types.Entities.LEATHERARMOR, "armor", "leatherarmor"],
    mailarmor: [Types.Entities.MAILARMOR, "armor", "mailarmor"],
    platearmor: [Types.Entities.PLATEARMOR, "armor", "platearmor"],
    redarmor: [Types.Entities.REDARMOR, "armor", "redarmor"],
    goldenarmor: [Types.Entities.GOLDENARMOR, "armor", "goldenarmor"],

    flask: [Types.Entities.FLASK, "object", "flask"],
    cake: [Types.Entities.CAKE, "object", "cake"],
    burger: [Types.Entities.BURGER, "object", "burger"],
    chest: [Types.Entities.CHEST, "object", "chest"],
    firepotion: [Types.Entities.FIREPOTION, "object", "firepotion"],

    guard: [Types.Entities.GUARD, "npc", "guard"],
    villagegirl: [Types.Entities.VILLAGEGIRL, "npc", "villagegirl"],
    villager: [Types.Entities.VILLAGER, "npc", "villager"],
    coder: [Types.Entities.CODER, "npc", "coder"],
    scientist: [Types.Entities.SCIENTIST, "npc", "scientist"],
    priest: [Types.Entities.PRIEST, "npc", "priest"],
    king: [Types.Entities.KING, "npc", "king"],
    rick: [Types.Entities.RICK, "npc", "rick"],
    nyan: [Types.Entities.NYAN, "npc", "nyan"],
    sorcerer: [Types.Entities.SORCERER, "npc", "sorcerer"],
    agent: [Types.Entities.AGENT, "npc", "agent"],
    octocat: [Types.Entities.OCTOCAT, "npc", "octocat"],
    beachnpc: [Types.Entities.BEACHNPC, "npc", "beachnpc"],
    forestnpc: [Types.Entities.FORESTNPC, "npc", "forestnpc"],
    desertnpc: [Types.Entities.DESERTNPC, "npc", "desertnpc"],
    lavanpc: [Types.Entities.LAVANPC, "npc", "lavanpc"],
    
    getType: function(kind) {
        return kinds[Types.getKindAsString(kind)][1];
    }
};

Types.rankedWeapons = [
    Types.Entities.SWORD1,
    Types.Entities.SWORD2,
    Types.Entities.AXE,
    Types.Entities.MORNINGSTAR,
    Types.Entities.BLUESWORD,
    Types.Entities.REDSWORD,
    Types.Entities.GOLDENSWORD
];

Types.rankedArmors = [
    Types.Entities.CLOTHARMOR,
    Types.Entities.LEATHERARMOR,
    Types.Entities.MAILARMOR,
    Types.Entities.PLATEARMOR,
    Types.Entities.REDARMOR,
    Types.Entities.GOLDENARMOR
];

Types.getWeaponRank = function(weaponKind) {
    return _.indexOf(Types.rankedWeapons, weaponKind);
};

Types.getArmorRank = function(armorKind) {
    return _.indexOf(Types.rankedArmors, armorKind);
};

Types.isPlayer = function(kind) {
    return kinds.getType(kind) === "player";
};

Types.isMob = function(kind) {
    return kinds.getType(kind) === "mob";
};

Types.isNpc = function(kind) {
    return kinds.getType(kind) === "npc";
};

Types.isCharacter = function(kind) {
    return Types.isMob(kind) || Types.isNpc(kind) || Types.isPlayer(kind);
};

Types.isArmor = function(kind) {
    return kinds.getType(kind) === "armor";
};

Types.isWeapon = function(kind) {
    return kinds.getType(kind) === "weapon";
};

Types.isObject = function(kind) {
    return kinds.getType(kind) === "object";
};

Types.isChest = function(kind) {
    return kind === Types.Entities.CHEST;
};

Types.isItem = function(kind) {
    return Types.isWeapon(kind) 
        || Types.isArmor(kind) 
        || (Types.isObject(kind) && !Types.isChest(kind));
};

Types.isHealingItem = function(kind) {
    return kind === Types.Entities.FLASK 
        || kind === Types.Entities.BURGER;
};

Types.isExpendableItem = function(kind) {
    return Types.isHealingItem(kind)
        || kind === Types.Entities.FIREPOTION
        || kind === Types.Entities.CAKE;
};

Types.getKindFromString = function(kind) {
    if(kind in kinds) {
        return kinds[kind][0];
    }
};

Types.getKindAsString = function(kind) {
    for(var k in kinds) {
        if(kinds[k][0] === kind) {
            return k;
        }
    }
};

Types.getMobName = function(kind) {
    for(var k in kinds) {
        if(kinds[k][0] === kind) {
            return kinds[k][2];
        }
    }
};

Types.forEachKind = function(callback) {
    for(var k in kinds) {
        callback(kinds[k][0], k);
    }
};

Types.forEachArmor = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(Types.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};

Types.forEachMobOrNpcKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(Types.isMob(kind) || Types.isNpc(kind)) {
            callback(kind, kindName);
        }
    });
};

Types.forEachArmorKind = function(callback) {
    Types.forEachKind(function(kind, kindName) {
        if(Types.isArmor(kind)) {
            callback(kind, kindName);
        }
    });
};

Types.getOrientationAsString = function(orientation) {
    switch(orientation) {
        case Types.Orientations.LEFT: return "left"; break;
        case Types.Orientations.RIGHT: return "right"; break;
        case Types.Orientations.UP: return "up"; break;
        case Types.Orientations.DOWN: return "down"; break;
    }
};

Types.getRandomItemKind = function(item) {
    var all = _.union(this.rankedWeapons, this.rankedArmors),
        forbidden = [Types.Entities.SWORD1, Types.Entities.CLOTHARMOR],
        itemKinds = _.difference(all, forbidden),
        i = Math.floor(Math.random() * _.size(itemKinds));
    
    return itemKinds[i];
};

Types.getMessageTypeAsString = function(type) {
    var typeName;
    _.each(Types.Messages, function(value, name) {
        if(value === type) {
            typeName = name;
        }
    });
    if(!typeName) {
        typeName = "UNKNOWN";
    }
    return typeName;
};

if(!(typeof exports === 'undefined')) {
    module.exports = Types;
}
