new Vue({
    el: '#app',
    data: {
        //player stats
        playerHP: 100,
        playerMaxDmg: 15,
        playerMinDmg: 6,
        playerSpecialDmg: 20,

        //monster stats
        monsterHP: 100,
        monsterMaxDmg: 8,
        monsterMinDmg: 6,

        //others
        originalLogs: ['Let the battle begin!', 'another one'],
        isPlayerLog: true,
        showControls: false
    },
    computed:{
        //reverses the logs
        logs: function(){
            return this.originalLogs.slice().reverse()
        },
        monsterLogClass: function(){
            return{
                'monster-turn': true
            }
        }
    },
    methods:{
        //player functions
        attack: function(){
            damage = Math.floor(Math.random() * (this.playerMaxDmg - this.playerMinDmg) + this.playerMinDmg);
            this.monsterHP -= damage;
            this.originalLogs.push('You dealt ' + damage + ' damage');
            this.monsterAttack();
        },
        specialAttack: function(){
            this.monsterHP -= this.playerSpecialDmg;
            this.originalLogs.push('You dealt ' + this.playerSpecialDmg + ' special damage')
            this.monsterAttack();
        },
        heal: function(){
            this.playerHP += 10;
            this.originalLogs.push('You healed ' + 10 + ' health')
            this.monsterAttack();
        },
        //monster functions
        monsterAttack: function(){
            damage = Math.floor(Math.random() * (this.monsterMaxDmg - this.monsterMinDmg) + this.monsterMinDmg);
            this.originalLogs.push('Monster dealt ' + damage + ' damage')
            this.playerHP -= damage;
        },
        //others
        resetData: function(){
            this.playerHP = 100,
            this.playerMaxDmg = 15,
            this.playerMinDmg = 13,
            this.playerSpecialDmg = 20,
            this.monsterHP = 100,
            this.monsterMaxDmg = 8,
            this.monsterMinDmg = 6,
            this.originalLogs = ['Let the battle begin!', 'another one'],
            this.showControls = false
        },
        gameStart: function(){
            this.showControls = true;

        },
        gameEnd: function(){
            this.showControls = false
            this.resetData();
        }
        
        
    }
});