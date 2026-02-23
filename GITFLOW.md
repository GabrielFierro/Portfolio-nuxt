# Gitflow

Este documento describe las pautas y procesos que seguimos para trabajar de forma ordenada.

## Branches - Responsabilidades

**main** → Rama productiva. Contiene siempre código listo para deploy. No se permite trabajar directamente sobre esta rama.

## Flujo de Branches

**feature/** → Nuevas funcionalidades.

- Se crean desde `main`.
- Se mergean a `main` mediante Pull Request.
- Deben estar testeadas antes del merge.
- Pueden incluir actualización de versión si corresponde.

**fix/** → Fix rápido.

- Se crean desde `main`.
- Se mergean a `main` mediante Pull Request.

**hotfix/** → Fix rápido en producción.

- Se crean desde `main`.
- Se mergean a `main`.
- Se deploya inmediatamente después del merge.
