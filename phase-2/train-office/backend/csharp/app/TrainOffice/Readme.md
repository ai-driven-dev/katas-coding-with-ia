# Exemple Complet de migration

## prérequis

le setting "DatabaseProvider" doit être à "PostgreSql" ou autres systèmes de bases de données.

### Créer une migration

```sh
dotnet ef migrations add InitialCreate 
```

### Appliquer la migration

```sh
dotnet ef database update
```

### Vérifier les migrations

```sh
dotnet ef migrations list
```

## Openapi.json generation

Install Nswag.ConsoleCore

```sh
dotnet tool install --global Nswag.ConsoleCore
```

Run nswag command:

```sh
nswag run .\nswag.json
```
