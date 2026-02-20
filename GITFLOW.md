# Gitflow

Este documento describe las pautas y procesos que seguimos para trabajar de forma ordenada.

## Branches - Responsabilidades

**main** → Rama productiva. Solo recibe merges desde `release/*` y `hotfix/*`.
**develop** → Rama de desarrollo. Base de integración de nuevas features.
**stage** → Entorno intermedio (preproducción). Refleja lo que está listo para validar el equipo o cliente.

## Flujo de Branches

**feature/** → Nuevas funcionalidades.

- Se crean desde `dev`.
- Se mergean a `dev` mediante Pull Request.

**fix/** → Fix rápido en desarrollo.

- Se crean desde `dev`.
- Se mergean a `dev` mediante Pull Request.

**release/** → Preparación para un deploy a producción. Normalmente sale desde `dev` con los cambios ya probados y con un cambio en la version del package `0.0.1` → `0.0.2`.

- Se crean desde `dev`.
- Se mergean a `main`.

**hotfix/** → Fix rápido en producción.

- Se crean desde `main`.
- Se mergean a `main`.

**backport/** → Rama para sincronizar cambios ya aplicados en `main` hacia `dev`. Pueden ser por releses o hotfix.

- Se crean desde `main` después de mergear un `release/*` o un `hotfix/*`.
- Se mergean a `dev` para mantener la rama de desarrollo alineada con producción.
