
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
            "I work in the office",
            "Like a boss",
            "I wear sandals with socks",
            "Like a boss",
            "Now move it, it's UT time",
            "Where I kill you like a boss"
        ],

        "villagegirl": [
            "Hi there, scientist!",
            "How do you like this researching endeavour?",
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
            'for fame and glory. <a target="_blank" href="https://dx.doi.org/10.1126/science.aad8852">FMT</a> too.'
        ],

        "agent": [
            "Do not try to bend enterotypes coordinates",
            "That's impossible",
            "Instead, only try to realize the truth...",
            'There are no <a target="_blank" href="http://enterotypes.org/">enterotypes</a>.'
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
            "I am the inventor of these two beverages.",
            "The dark one will boost your productivity and revitalize you...",
            "The bubbly one will make you think you are invincible...",
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
            "You can find many kinds of labware left around by other scientists",
            "and as upgrades as part of sampling process requirements.",
            "While sampling, the tougher the creature, the higher the potential.",
            "You can also unlock achievements by travelling and networking.",
            "Click on the small cup icon to see a list of all the achievements.",
            "Please stay a while and enjoy the many surprises of DataQuest",
            "Safe journey, young scientist."
        ],

        "sorcerer": [
            "Ah... I had foreseen you would come to see me.",
            "I am the lab technician also known as mad lab wizard",
            "... that got all the data on that last paper.",
            "*ahem* ... I mean I know all the protocols in the lab",
            "back and forth ... for doing them so many times!",
            "Now I'm just here taking some sun while my gels run.",
            "What is that? You need some tips?",
            "I understand. I'm the know it all right.",
            "So here, there are lots of labware left around.",
            "You can explore and collect them.",
            "There's also lots of creatures to sample.",
            "So make sure to poke some",
            "and remember",
            "All your protocols are belong to me.",
            "Now go out there and get me some samples!"
        ],

        "octocat": [
            "Welcome to DataQuest!",
            "Want to see the source code?",
            'Check out <a target="_blank" href="https://git.embl.de/ralves/dataquest">the repository on Git@EMBL</a>'
        ],

        "coder": [
            "Hi there!",
            "Am I using a Mac you ask?",
            "Why yes I am, isn't that what all scientists use?",
            "I don't know why myself...",
            "I guess it's shiny, looks nice and is expensive!",
            "For sure these are enough reasons",
            'Oh and <a target="_blank" href="http://papersapp.com">Papers</a> and <a target="_blank" href="http://www.sonnysoftware.com">Bookends</a>',
            "I heard they are really good!",
            "And want to know something cool?",
            "Try playing DataQuest on your mobile phone.",
            "Go on, give it a try..."
        ],

        "beachnpc": [
            "Don't mind me, I'm just here on vacation.",
            "I have to say...",
            "The ocean is really impressive.",
            "So vast and underexplored...",
            "You don't believe me?",
            'Then check this <a target="_blank" href="http://science.sciencemag.org/content/348/6237">special issue on TARA OCEANS</a>',
            "It's impressive right?"
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
