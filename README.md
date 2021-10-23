# ReactProductionBuild

Dieses Repository enthält zwei Production builds mit React. `DockerProjekt1` enthält einen suboptimalen Production Build, der so NICHT umgesetzt werden soll. `DockerProjekt2` enhält einen multi-stage build, der ein deutlich schlankeres Image erstellt.

Um die Images zu bauen, führe folgendes aus:

```
cd DockerProjekt2
docker build -t dockerprojekt2 .
cd ..
cd DockerProjekt1
docker build -t dockerprojekt1 .
```

Jetzt vergleiche die Größe der Docker Images

```
docker images
```

DockerProjekt2 ist deutlich kleiner!
