from stringcolor import *
import sys
from time import sleep
import random
import data

def write(i):
    for char in i + "\n":
        if char == " ":
            sleep(.08)
        elif char in [".", "!", "?"]:
            sleep(.1)
        else:
            sleep(.05)
        sys.stdout.write(char)
        sys.stdout.flush()

def combat(monster):
    pass

# write(cs("Coredlia:", "salmon").bold().underline() + " Welcome to the land of " + cs("Disconia!", "green").bold())
# write(cs("\nCoredlia:", "salmon").bold().underline() + " Here in " + cs("Disconia,", "green").bold() + " we express our selves through the medium of dance, blah blah blah, you have been specially selected, blah blah blah, this is your first day as a knight, whatever.")
# write(cs("\nCoredlia:", "salmon").bold().underline() + ' Alright, the gist is, you dance against monsters and they fucking die. I know, it'+"'"+'s dark, but what did you expect? That they would "return to the wild" or "run away?"')
write(cs("\nCoredlia:", "salmon").bold().underline() + ' This will be your robotic companion in your adventures, ' +cs("Rhythmbot.", "skyblue").bold().underline())
write(cs("\nRhythmbot:", "skyblue").bold().underline() + ' Hello, mortal.')
write(cs("\nCoredlia:", "salmon").bold().underline() + " Oh, no! It's a wild " + cs("Guitarmadillo!", "blue").bold())
combat(data.Guitarmadillo(1))