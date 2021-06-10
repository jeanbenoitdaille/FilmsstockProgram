/** JavaScript */
const films = [
  // titre, titre original, durée (min), année, réalisateur, studio, origine, personnage principal, distinction
  [
    'Le voyage de Chihiro',
    'Sen to Chihiro no kamikakushi',
    124,
    2001,
    'Hayao Miyazaki',
    'Studio Ghibli',
    'Japonais',
    'Chihiro',
    '10e sur les 100 meilleurs films de tous les temps en langue non-anglaise'
  ],
  [
    'Le Château ambulant',
    'Hauru no ugoku shiro',
    119,
    2004,
    'Studio Ghibli',
    'Hayao Miyazaki',
    'Japonais',
    'Hauru',
    "Nomination à l'Oscar du meilleur film d'animation en 2006"
  ],
  [
    'Anastasia ',
    'Anastasia',
    94,
    1997,
    'Fox Animation Studios',
    'Don Bluth et Gary Goldman',
    'Américain',
    'Anastasia'
  ],
  [
    'Spirit, l\'étalon des plaines',
    'Spirit: Stallion of the Cimarron',
    84,
    2002,
    'DreamWorks Animation',
    'Kelly Asbury',
    'Américain',
    'Spirit',
    "Nomination à l'Oscar du meilleur film d'animation en 2003"
  ],
  [
    'Ratatouille',
    'Ratatouille',
    111,
    2007,
    'Brad Bird',
    'Pixar',
    'Américain',
    'Rémy',
    "Oscar du meilleur film d'animation en 2007"
  ]
]
for (let i = 0; i < films.length; i++) {
  console.log(i + 1, films[i][0], '(' + films[i][3] + ')')
}

/** JavaScript */
let input
let selectedFilm
let end = false

while (!end) {
  console.log('X Sortir')

  for (let i = 0; i < films.length; i++) {
    console.log(i + 1, films[i][0], '(' + films[i][3] + ')')
  }

  input = prompt('Sélection ')
  if (input === 'X') {
    end = true
  } else if (input > 0 && input <= films.length) {
    selectedFilm = films[input - 1]
    console.log('Titre:', selectedFilm[0])
    console.log('Titre original:', selectedFilm[1])
    console.log('Durée:', selectedFilm[2], 'min')
    console.log('Année de sortie:', selectedFilm[3])
    console.log('Réalisateur:', selectedFilm[4])
    console.log('Studio:', selectedFilm[5])
    console.log('Origine:', selectedFilm[6])
    console.log('Personnage principal:', selectedFilm[7])
    console.log('Distinction:', selectedFilm[8])
  }
}
