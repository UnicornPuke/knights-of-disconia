class Monster {
    constructor(bsgrv, bsvbe, bsbop, bsryt, bshp, level, name, prog, type, moves) {
        this.bsgrv = bsgrv;
        this.bsvbe = bsvbe;
        this.bsbop = bsbop;
        this.bsryt = bsryt;
        this.level = level;
        this.name = name;
        this.prog = prog;
        this.bshp = bshp;
        this.moves = moves;
        this.grv = bsgrv + ((this.level - 1) * this.prog);
        this.vbe = bsvbe + ((this.level - 1) * this.prog);
        this.ryt = bsryt + ((this.level - 1) * this.prog);
        this.maxhp = bshp + ((this.level - 1) * this.prog );
        this.hp = this.maxhp;
        this.type = type
    }

    reset() {
        this.hp = this.maxhp;
    }

    newlevel(l) {
        this.level = l;
        this.grv = bsgrv + ((l - 1) * this.prog);
        this.vbe = bsvbe + ((l - 1) * this.prog);
        this.ryt = bsryt + ((l - 1) * this.prog);
        this.maxhp = bshp + ((l - 1) * this.prog );
    }
}
class Player {
    constructor() {
        this.grv = 30
        this.vbe = 30
        this.ryt = 30
        this.bop = 1.5
        this.maxhp = 50
        this.hp = this.maxhp
        this.moves = []
    }
}

class Move {
    constructor(name, type, power, accuracy, pp, description) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.accuracy = accuracy;
        this.pp = pp;
        this.description = description;
    }

    perform(target,performer) {
        if (this.power == 0) {
            damage = 0
        }
        else {
            damage = math.floor((performer.grv + this.power) / 3)
        }
        if ((this.type == "Hip-Hop" && target.type == "Pop") || (this.type == "Pop" && target.type == "Country")|| (this.type == "Country" && target.type == "Jazz")|| (this.type == "Jazz" && target.type == "Funk")|| (this.type == "Funk" && target.type == "Classical")|| (this.type == "Classical" && target.type == "Metal")|| (this.type == "Metal" && target.type == "Blues")|| (this.type == "Blues" && target.type == "Rock")|| (this.type == "Rock" && target.type == "Hip-Hop")){
            damage /= 2;
        }
        if ((target.type == "Hip-Hop" && this.type == "Pop") || (target.type == "Pop" && this.type == "Country")|| (target.type == "Country" && this.type == "Jazz")|| (target.type == "Jazz" && this.type == "Funk")|| (target.type == "Funk" && this.type == "Classical")|| (target.type == "Classical" && this.type == "Metal")|| (target.type == "Metal" && this.type == "Blues")|| (target.type == "Blues" && this.type == "Rock")|| (target.type == "Rock" && this.type == "Hip-Hop")){
            damage *= 2;
        }
        target.hp -= damage
    }
}

const AFlatRiff = new Move("A♭ Riff", "Metal", 40, 85, 15, "User gains 25% of health damaged.");
const SpikeStab = new Move("Spike Stab", "Metal", 30, 90, 20, "")
const Screech = new Move("Screech", "Metal", 30, 75, 15, "Target loses a bit of groove and vibe.");
const BallChange = new Move("Ball Change", "Jazz", 35, 90, 20, "Target's accuracy has a 50% chance of being halved for one turn.")
const Burst=  new Move("Burst", "Pop", 15, 95, 40, "")
const Vibrato=  new Move("Vibrato", "Classical", 0, 80, 30, "Target loses a bit of groove.");
const Improvise = new Move("Improvise", "Jazz", 30, 90, 20, "Target's rythym has a 50% chance of being halved for one turn.")
const SaxophoneSolo = new Move("Saxophone Solo", "Jazz", 70, 50, 25, "")
const Soulful = new Move("Soulful", "Blues", 0, 80, 15, "User gains 25% of max hp.");

const ChoreoCat = new Monster(25, 24, 1, 18, 30, 1, "Choreo Cat", 2, "Jazz", [BallChange, Screech, Vibrato, Improvise, SaxophoneSolo]);
const Guitarmadillo = new Monster(25, 24, 1, 18, 30, 1, "Guitarmadillo", 2, "Metal", [AFlatRiff, SpikeStab, Screech, Burst]);

display = document.getElementById("text")
adisplay = document.getElementById("display")

function waitEnter() {
    return new Promise((resolve) => {
        document.addEventListener('keydown', onKeyHandler);
        function onKeyHandler(e) {
            if (e.key === 'Enter') {
                document.removeEventListener('keydown', onKeyHandler);
                resolve();
            }
        }
    });
}

function combat(monsters, battle) {
    adisplay.style.backgroundImage = "url(images/" + battle + "b.gif)"
    // document.getElementById("text-box").style.visibility = "hidden"
    adisplay.innerHTML+= "<img src='images/" + monsters[0].name + "1.gif' style='position: absolute; z-index:24;height: 40vh;top: 5vh; right: calc(50vw - 79vh); '>"
    adisplay.innerHTML+= "<img src='images/platform.png' style='position: absolute; height: 48vh; top: 20vh; right: calc(50vw - 83vh);'>"
    adisplay.innerHTML+= "<img src='images/platform.png' style='position: absolute; height: 48vh; bottom: 2vh; left: calc(50vw - 83vh)'>"
    for(i in monsters) {
        while (i.hp > 0 || Player.hp > 0) {
            if (i.ryt > Player.ryt) {
                console.log("hi")
            }
            else {
                console.log("bye")
            }
        }
    }
}

async function main() {
    display.innerHTML = "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Welcome to the land of Disconia!</p>"
    display.innerHTML += "<p>PRESS ENTER TO CONTINUE</p>"
    adisplay.style.backgroundImage = "url(images/meadow.gif)"
    await waitEnter();
    display.innerHTML = "<p style='position:absolute; bottom:0;right:0;margin:0 0 0 0'>01 - COMMUNICATION_TERMINAL</p>"
    display.innerHTML = "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Welcome to the land of Disconia!</p>"
    display.innerHTML = "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Here, people express themselves through the medium of dance, blah blah blah, this is your first day as a knight, whatever.</p>"
    await waitEnter();
    display.innerHTML = '<p><span style="color:#FA8072"><u><b>Coredlia:</b></u></span> Anyways, the gist is, you dance against animals and they fucking die, what did you expect that they would "return to the wild" or "run away?"</p>'
    await waitEnter();
    display.innerHTML = '<p><span style="color:#FA8072"><u><b>Coredlia:</b></u></span> Here will be your robotic companion, Rhythmbot.</p>'
    await waitEnter();
    display.innerHTML = '<p><span style="color:skyblue"><u><b>Rhythmbot:</b></u></span> Hello, Mortal.</p>'
    await waitEnter();
    display.innerHTML = "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Okay...</p>"
    await waitEnter();
    display.innerHTML = "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Oh no! It's a wild Guitarmadillo!</p>"
    await waitEnter();
    combat([Guitarmadillo], "meadow")
}

main()