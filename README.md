<div style="text-align: center;">
    <img src="/assets/images/logo.jpg" width="200">
</div>

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

## Location

Address:

```
344 Lowell Street
Lexington, MA 02420
```

### Testing Map in Markdown :)

```topojson
{
  "type": "Topology",
  "objects": {
    "collection": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {
            "marker-color": "#f70202",
            "marker-size": "medium",
            "marker-symbol": ""
          },
          "coordinates": [0, 0]
        }
      ]
    }
  },
  "arcs": [],
  "transform": {
    "scale": [1, 1],
    "translate": [-71.19758605957031, 42.44600806191486]
  },
  "bbox": [
    -71.19758605957031, 42.44600806191486, -71.19758605957031, 42.44600806191486
  ]
}
```
