![MACCLM Logo](./assets/images/logo.jpg | width=48)

<img src="/assets/images/logo.jpg" width="48">

# MACCLM.org web site

- Test website:       [https://macclm.smart-corporation.com](https://macclm.smart-corporation.com)
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

Address:

...
344 Lowell Street
Lexington, MA 02420
...

```topojson
{
  "type": "Topology",
  "transform": {
    "scale": [0.0005000500050005, 0.00010001000100010001],
    "translate": [100, 0]
  },
  "objects": {
    "example": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "properties": {"prop0": "value0"},
          "coordinates": [42.447349, 42.447349]
        },
        {
          "type": "LineString",
          "properties": {"prop0": "value0", "prop1": 0},
          "arcs": [0]
        },
        {
          "type": "Polygon",
          "properties": {"prop0": "value0",
            "prop1": {"this": "that"}
          },
          "arcs": [[1]]
        }
      ]
    }
  },
  "arcs": [[[4000, 0], [1999, 9999], [2000, -9999], [2000, 9999]],[[0, 0], [0, 9999], [2000, 0], [0, -9999], [-2000, 0]]]
}
```