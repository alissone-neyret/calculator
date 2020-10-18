# Calculatrice :1234:

### :bookmark: Sommaire

* Description
* Technologies utilisées
* Installation
* Utilisation de l'API

## :clipboard: Description

Calculatrice permettant de réaliser facilement des calculs mathématiques simples.

## :wrench: Technologies utilisées

ReactJs / NodeJs / CSS

## :floppy_disk: Installation

Pré-requis :

* [NodeJS](http://localhost:3000)

#### Etape 1 : Cloner le projet :two_women_holding_hands:

Depuis un terminal, placez-vous dans le dossier où vous souhaitez enregistrer le projet puis clonez-le :

```
cd "dossierOuStockerLeProjet"
git clone "https://github.com/..."
```

#### Etape 3 : NPM :cd:

Il est maintenant temps d'installer les paquets nécessaires à la bonne exécution de la calculatrice. Placez-vous dans le dossier de la calculatrice puis exécutez la commande suivante dans le dossier front **ET** dans le dossier back  : 

```
npm install
```

#### Etape 4 : Lancement :rocket:

Félicitations vous avez réussi l'installation ! Deux dernières commandes à lancer et c'est à vous de jouer : 

Placez-vous dans le dossier back : 

```
node app.js
```

Dans un autre terminal, placez-vous dans le dossier front : 

```
npm start
```
## :green_book: Utilisation de l'API

#### Fonctionnement

L'API permet de calculer une opération mathématique avec deux nombres et un opérateur.

#### Calcul d'une opération mathématique

Récupère deux nombres et un opérateur :
```
{
    "numberOne" : "1",
    "numberTwo" : "2",
    "operator" : "+"
}
```

Retourne les nouvelles valeurs des deux nombres ainsi que le résultat de l'opération : 

```
{
    "numberOne" : "3",
    "numberTwo" : "",
    "result" : "3"
}
```
