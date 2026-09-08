# Dictionnaire de données

## Category

| Data | Type | Description |
|---|---|---|
| `id_category` | INT | Unique ID of the category |
| `nom` | VARCHAR | Name of the category |

## Article

| Data | Type | Description |
|---|---|---|
| `id_article` | INT | Unique ID of the article |
| `titre` | VARCHAR | Title of the article |
| `img` | VARCHAR | Image of the article |
| `date_publication` | DATE | Publication date |
| `contenu` | TEXT | Content of the article |
| `id_user` | INT | ID of the user who wrote the article |
| `id_category` | INT | ID of the article's category |

## User

| Data | Type | Description |
|---|---|---|
| `id_user` | INT | Unique ID of the user |
| `nom_prenom` | VARCHAR | User's first and last name |
| `email` | VARCHAR | User's email |
| `password` | VARCHAR | User's password |
