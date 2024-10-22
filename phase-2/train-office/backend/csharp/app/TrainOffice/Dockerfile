# Utiliser l'image de base .NET SDK pour la compilation
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Définir l'argument de build pour DisableExportScript
ARG DisableExportScript=true

# Copier les fichiers du projet et restaurer les dépendances
COPY *.csproj ./
RUN dotnet restore

# Copier le reste des fichiers et compiler le projet avec l'argument DisableExportScript
COPY . ./
RUN dotnet publish -c Release -o out /p:DisableExportScript=${DisableExportScript}

# Utiliser l'image de base .NET Runtime pour exécuter l'application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Exposer le port sur lequel l'application écoute
EXPOSE 7000

# Définir le point d'entrée de l'application
ENTRYPOINT ["dotnet", "TrainOffice.dll"]