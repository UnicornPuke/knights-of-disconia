import math

class Monster:
    def __init__(self, level, type_, bsgrv, bsvbe, bsbop, bsswg):
        self.level = level
        self.maxhp = 0
        self.hp = self.maxhp
        self.bsgrv = bsgrv
        self.bsvbe = bsvbe
        self.bsbop = bsbop
        self.bsswg=bsswg
        self.type =type_
        self.grv = bsgrv + math.floor((self.level - 1) / 2)
        self.vbe = bsvbe + math.floor((self.level - 1) / 2)
        self.swg = bsswg + math.floor((self.level - 1) / 2)
        self.bop = self.bsbop

class Type:
    def __init__(self, name):
        self.name = name
        if self.name == "Funk":
            self.weakness = "Classical"
            self.strength = "Jazz"
        if self.name == "Pop":
            self.weakness = "Country"
            self.strength = "Hip-Hop"
        if self.name == "Classical":
            self.weakness = "Metal"
            self.strength = "Funk"
        if self.name == "Jazz":
            self.weakness = "Funk"
            self.strength = "Country"
        if self.name == "Hip-Hop":
            self.weakness = "Pop"
            self.strength = "Rock"
        if self.name == "Country":
            self.strength = "Pop"
            self.weakness = "Hip-Hop"
        if self.name == "Rock":
            self.weakness = "Hip-Hop"
            self.strength = "Blues"
        if self.name == "Blues":
            self.strength = "Metal"
            self.weakness = "Rock"
        if self.name == "Metal":
            self.weakness = "Blues"
            self.strength = "Classical"

class Choreocat(Monster):
    def __init__(self, level):
        super().__init__(level, Type("Jazz"), 20, 20, level, 15)

class Guitarmadillo(Monster):
    def __init__(self, level):
        super().__init__(level, Type("Blues"), 16, 13, level, 15)