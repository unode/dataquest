
define(['character'], function(Character) {

    var NpcTalk = {
        "guard": [
            "Hello there",
            "We don't need to see your timesheet record",
            "You are not the scientist we're looking for",
            "Move along, move along..."
        ],

        "king": [
            "Hi, I'm the PI",
            "I run this place",
            "Like a boss",
            "I talk to people",
            "Like a boss",
            "I sit in the office",
            "Like a boss",
            "I wear sandals with socks",
            "Like a boss",
            "Now go do something useful",
            "Like a boss"
        ],

        "villagegirl": [
            "Hi there, adventurer!",
            "How do you like this game?",
            "It's all happening in a single web page! Isn't it crazy?",
            "It's all made possible thanks to WebSockets.",
            "I don't know much about it, after all I'm just a program.",
            'Why don&#x27;t you read this <a target="_blank" href="http://hacks.mozilla.org/2012/03/browserquest/">blog post</a> and learn all about it?'
        ],

        "villager": [
            "Howdy stranger. Do you like poetry?",
            "Roses are red, violets are blue...",
            "I like sampling stool, and so do you...",
            "The samples are crap, now what to do?",
            "Bad data, no paper, I have no clue.",
            "Maybe machine learning, could interest you...",
            "for fame and glory, enterotypes too."
        ],

        "agent": [
            "Do not try to bend enterotypes dimensions",
            "That's impossible",
            "Instead, only try to realize the truth...",
            "There are no enterotypes."
        ],

        "rick": [
            "Hi there stranger!",
            "It's been a while since anyone visited!",
            "Where is here you ask?",
            "This is the IT support *room*.",
            "And what was all that back there?",
            "Well the cluster datacenter of course",
            "Yeah we know it can be confusing",
            "File a ticket next time",
            "We'll help you find your way",
            "And remember keep your processes under control"
        ],

        "scientist": [
            "Greetings.",
            "I am the inventor of these two potions.",
            "The red one will replenish your health points...",
            "The orange one will turn you into a firefox and make you invincible...",
            "But it only lasts for a short while.",
            "So make good use of it!",
            "Now if you'll excuse me, I need to get back to my experiments..."
        ],

        "nyan": [
            "nyan nyan nyan yan nyan",
            "nyan nyan yan nyan nyan yan nyan",
            "nyan yan nyan nyan yan nyan",
            'nyan nyan nyan <a target="_blank" href="http://ralves.embl.de/dataquest/img/common/nyan_upsilon.png">nyan yan</a> nyan nyan'
        ],

        "forestnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],

        "lavanpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],

        "priest": [
            "Oh, hello, young man.",
            "Wisdom is everything, so I'll share a few guidelines with you.",
            "You are free to go wherever you like in this world",
            "but beware of the many challenges that await you.",
            "You can find many kinds of labware while sampling creatures.",
            "The tougher the creature, the higher the potential.",
            "You can also unlock achievements by travelling and networking.",
            "Click on the small cup icon to see a list of all the achievements.",
            "Please stay a while and enjoy the many surprises of DataQuest",
            "Safe journey, young scientist."
        ],

        "sorcerer": [
            "Ah... I had foreseen you would come to see me.",
            "Well? How do you like my new staff?",
            "Pretty cool, eh?",
            "Where did I get it, you ask?",
            "I understand. It's easy to get envious.",
            "I actually crafted it myself, using my mad wizard skills.",
            "But let me tell you one thing...",
            "There are lots of labware in this game.",
            "Some more powerful than others.",
            "In order to find it, exploration is key.",
            "Good luck."
        ],

        "octocat": [
            "Welcome to BrowserQuest!",
            "Want to see the source code?",
            'Check out <a target="_blank" href="http://github.com/nenuadrian/BrowserQuest">the repository on GitHub</a>'
        ],

        "coder": [
            "Hi! Do you know that you can also play DataQuest on your tablet or mobile?",
            "That's the beauty of HTML5!",
            "Give it a try..."
        ],

        "beachnpc": [
            "Don't mind me, I'm just here on vacation.",
            "I have to say...",
            "Hawaian beaches are the best.",
            "Have you seen the classification of these SpecI'es?"
        ],

        "desertnpc": [
            "One does not simply walk into these mountains...",
            "An ancient dogma lord is said to dwell here.",
            "Nobody knows exactly what it looks like...",
            "...for none has lived to tell the tale.",
            "It's not too late to turn around and quit science!"
        ],

        "othernpc": [
            "lorem ipsum",
            "lorem ipsum"
        ]
    };

    var Npc = Character.extend({
        init: function(id, kind) {
            this._super(id, kind, 1);
            this.itemKind = Types.getKindAsString(this.kind);
            this.talkCount = NpcTalk[this.itemKind].length;
            this.talkIndex = 0;
        },

        talk: function() {
            var msg = null;

            if(this.talkIndex > this.talkCount) {
                this.talkIndex = 0;
            }
            if(this.talkIndex < this.talkCount) {
                msg = NpcTalk[this.itemKind][this.talkIndex];
            }
            this.talkIndex += 1;

            return msg;
        }
    });

    return Npc;
});
