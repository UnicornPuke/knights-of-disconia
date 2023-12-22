class Monster {
    constructor(bsgrv, bsvbe, bsbop, bsryt, bshp, level, name, prog, type) {
        this.bsgrv = bsgrv;
        this.bsvbe = bsvbe;
        this.bsbop = bsbop;
        this.bsryt = bsryt;
        this.level = level;
        this.name = name;
        this.prog = prog;
        this.bshp = bshp;
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

const ChoreoCat = new Monster(25, 24, 1, 18, 30, 1, "Choreo Cat", 2, "Jazz");
const Guitarmadillo = new Monster(25, 24, 1, 18, 30, 1, "Guitarmadillo", 2, "Metal");

display = document.getElementById("display")
display.style.background = 'rgb(51,51,51)';
display.style.zIndex = '10';

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

function combat(monsters) {
    display2.style.background = 'url(/images/guitarmadillo2.gif)';
}

async function main() {
    display.innerHTML += "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Welcome to the land of Disconia!</p>"
    display.innerHTML += "<p>PRESS ENTER TO CONTINUE</p>"
    await waitEnter();
    display.innerHTML = "<p style='position:absolute; bottom:0;right:0;margin:0 0 0 0'>01 - COMMUNICATION_TERMINAL</p>"
    display.innerHTML += "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Welcome to the land of Disconia!</p>"
    display.innerHTML += "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Here, people express themselves through the medium of dance, blah blah blah, this is your first day as a knight, whatever.</p>"
    await waitEnter();
    display.innerHTML += '<p><span style="color:#FA8072"><u><b>Coredlia:</b></u></span> Anyways, the gist is, you dance against animals and they fucking die, what did you expect that they would "return to the wild" or "run away?"</p>'
    await waitEnter();
    display.innerHTML += '<p><span style="color:#FA8072"><u><b>Coredlia:</b></u></span> Here will be your robotic companion, Rhythmbot.</p>'
    await waitEnter();
    display.innerHTML += '<p><span style="color:skyblue"><u><b>Rhythmbot:</b></u></span> Hello, Mortal.</p>'
    await waitEnter();
    display.innerHTML += "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Okay...</p>"
    await waitEnter();
    display.innerHTML += "<p><span style='color:#FA8072'><u><b>Coredlia:</b></u></span> Oh no! It's a wild Guitarmadillo!</p>"
    await waitEnter();
    display.style.width = 'calc(50vh - 4px)';
    display.style.height = 'calc(50vh - 4px)';
    display.style.position = 'relative';
    combat([Guitarmadillo]);
}

main()