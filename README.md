<div style="text-align: center;">
    <img src="/assets/images/logo.jpg" width="200">
</div>

# MACCLM.org Website

- Test website: [https://macclm.smart-corporation.com](https://macclm.smart-corporation.com)
- Production website: [https://www.macclm.org](https://macclm.smart-corporation.com)

## Clone Code

```
git clone https://github.com/macclm/macclm.git
cd macclm
```

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

<!---
Use this site to generate topojson code:
http://geojson.io/#map=16/42.4465/-71.1980
--->

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
  "transform": {
    "scale": [0.0005000500050005, 0.00010001000100010001],
    "translate": [-71.19758605957031, 42.44600806191486]
  },
  "bbox": [-71.19758605957031, 42.44600806191486, -71.19758605957031, 42.44600806191486],
  "arcs": []
}
```
