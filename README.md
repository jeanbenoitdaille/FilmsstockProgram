# Films Stock Program

Exercice JavaScript de catalogue de films avec sélection interactive.

## Objectif pédagogique

Manipuler :

- les tableaux imbriqués ;
- les boucles `for` et `while` ;
- `prompt()` ;
- les conditions ;
- l’accès aux éléments d’un tableau par index.

## Fonctionnement

Le script contient un catalogue de cinq films avec plusieurs informations : titre, titre original, durée, année, réalisateur, studio, origine, personnage principal et éventuellement distinction.

Il affiche la liste, demande une sélection avec `prompt()`, puis affiche les informations détaillées du film choisi. La saisie `X` permet de sortir de la boucle.

## Limites historiques

Le script dépend de `prompt()`, donc il est prévu pour un environnement JavaScript de navigateur ou équivalent, pas pour Node.js sans adaptation.

Les données sont stockées dans des tableaux positionnels : chaque champ dépend d’un index numérique, ce qui rend la structure fragile. Certains films n’ont pas exactement le même nombre de champs, et quelques valeurs réalisateur/studio sont inversées dans les données historiques.

Il n’y a ni ajout, ni modification, ni suppression, ni persistance des films.

## Fichier principal

`index.js`

## Exécution

Exécuter le script dans un environnement navigateur permettant `prompt()` et `console.log()`.

## Statut

Exercice d’apprentissage historique.

## Consolidation prévue

Candidat à une future fusion dans `learning-javascript/arrays-and-objects/catalogs/`.
