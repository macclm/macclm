# MACCLM.org web site

- Test website:       [https://macclm.smart-corporation.com](https://macclm.smart-corporation.com){target=_blank}
- Production website: [https://www.macclm.org](https://macclm.smart-corporation.com){target=_blank}

## Folder Structure:

```
- assets
| |- images
| \- js
|
\--- sunday-school
```

## Actions (Workflows)

In `.github/workflows`:

```
- update-submodules.yml : Automated script to pull data from other repos
- codeql.yml            : Security checks
- manual.yml            : Manually pull data from other repos
```

## Submodule

Run following commands to sync submodules:

```
git submodule sync
git submodule update --init --recursive --remote
```
