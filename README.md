# Choix du workflow
Gitflow me permet de séparé le travail en fonction de sa tache, et aussi de peu toucher à la branch master qui peut etre une source de risque. Avec gitflow feature_branch chaque fonctionnalité de l'appliction va être sexionné de la branch develop afin de ne pas avoir de conflit avec les autres colaborateurs(je suis seul ici mais potentiellement travaillé avec d'autre developeur par la suite).

La technique de merge entre develop et master était principalement des fastForward car je travaillais seul sur le projet.

Et les conventions utilisées d'écrire de message de commit était gitmoji
# Front
Notre groupe a choisie d'utiliser le project venant de la commande npx create-react-app , liens vers la source -> [Create React App](https://github.com/facebook/create-react-app)

## Les choix technique du projet
Pour des raisons d'apprentissage nous avons choisie :

* Front : en React car il s'agit d'une technologie qui m'interrésait et simple d'installation.

* Back : Nous avons également choix d'avoir une apiRest nodeJs pour la partie Back car simple d'installation et d'utilisation.

* BDD : Nous avons choisie mongodb et plus précisément mongoose pour des raisons de curiosité et d'apprentissage de l'outil.

## Obtenir le projet
Placer vous dans un repertoire:
Puis écrivez dans la ligne de commande 
```git flow init``` 
et enfin ecrivez : 
```git clone https://github.com/barder60/dockerReactTrello.git```
et lancer le projet via la commande : 
```docker-compose start```

## Emplacement du script

Dans le repertoire /trello, vous pouvez lancer l'appli via un:

### `docker-compose start`

Ouvrir [http://localhost:3001](http://localhost:3001) pour le voir sur votre navigateur.



