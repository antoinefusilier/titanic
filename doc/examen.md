# Examen

Dans une application sécurisée par vos soin avec Angular, et d'autres technologies, vous allez développer une interface permettant de faire des statistiques sur un Dataset spécifique : le titanic.

L'utilisation d'Angular pour l'interface utilisateur peut être utilisé.

L'objectif de l'application et d'afficher les survivants du Titanic en fonction du sexe, de l'age et de la classe des billets.

Si vous avez le temps la piste graphique à suivre est le design Web de l'application kaggle.com.

## Contraintes techniques

- Votre code sera versionné à l'aide de Git sur Github ou Gitlab.

- Utilisez Angular pour l'interface utilisateur et MongoDB pour la persistance des données.

- Il faudra également mettre en place une page de login pour consulter/lancer la création des statistiques.

- Vous devez faire la partie interface utilisateur à partir du chapitre qui suit ci-dessous.

## Analyse des données & pages à réalisées

1. Importez les données au format CSV à l'adresse suivante : https://raw.githubusercontent.com/hkacmaz/Titanic-Passenger-Survivors/master/train.csv

Puis tapez la ligne de commande suivante, notez l'option **headerline** qui indique les clés des valeurs du Dataset.

```bash
mongoimport --db titanic --collection passengers --type=csv --headerline --file train.csv --drop
```

2. Créez la page de login, page principale de l'application. Une fois connecté on sera redirigé vers la page pour lancer les analyses statistiques.

3. Créez la page de recherche à proprement parlée, elle comportera un menu principale permettant de se connecter et déconnecter.

```text
Sex : [] Age : [] Classe []
[Analyser]
```

Une fois la recherche effectuée vous redirigerez l'utilisateur vers une page proposant un graphique de votre choix pour expliciter chacun des résultats. Un bouton Reset permettra d'effacer la recherche et de revenir à la page précédente.

```text

Graphique

[Reset]

```

4. Améliorez maintenant l'analyse des données

Introduisez les éléments suivants dans la rechercher

- La moyenne

- L'écart type

5. (facultatif) Proposez une autre recherche sur l'analyse de ses données.
