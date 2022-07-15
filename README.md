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

![Lexington Mosque Map](/assets/images/lexington-mosque-map.png)

<!---
Use this site to generate topojson code:
http://geojson.io/#map=15/42.4465/-71.1980

Format: map=scale/latitude/longitude
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
            "marker-color": "#ff0000",
            "marker-size": "medium",
            "marker-symbol": "religious-muslim"
          },
          "coordinates": [0, 0]
        }
      ]
    }
  },
  "arcs": [],
  "transform": {
    "scale": [1, 1],
    "translate": [-71.1978006362915, 42.446134733058837]
  },
  "bbox": [
    -71.1978006362915, 42.446134733058837, -71.1978006362915, 42.446134733058837
  ]
}
```
