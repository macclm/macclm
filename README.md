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

<p>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11776.449962310346!2d-71.1978677!3d42.4466226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc72a0d0f0343e49c!2sLexington%20Mosque!5e0!3m2!1sen!2sus!4v1657855503575!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</p>

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
