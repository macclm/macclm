<center>
<img src="/assets/images/logo.jpg" width="200">
</center>

# MACCLM.org web site

- Test website: [https://macclm.smart-corporation.com](https://macclm.smart-corporation.com)
- Production website: [https://www.macclm.org](https://macclm.smart-corporation.com)

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

## Location (Testing)

### Address:

```
344 Lowell Street
Lexington, MA 02420
```

<center>
<img src="https://www.google.com/maps/place/344+Lowell+St,+Lexington,+MA+02420/@42.4464106,-71.2003011,17z/data=!3m1!4b1!4m5!3m4!1s0x89e39df95ed94fc3:0xb413b20e53e7900!8m2!3d42.4464106!4d-71.1981124">
</center>
