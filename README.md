<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="modelviewer" src="https://github.com/dave-kramer/modelviewer/blob/main/assets/box.png"> 

# GLB/GLTF Model Viewer & Editor 

[![License](https://img.shields.io/github/license/dave-kramer/modelviewer)](https://github.com/dave-kramer/modelviewer/blob/main/LICENSE)

> Allows users to view, edit & place GLB/GLTF Models on their website.


## Table of Contents

- [About](#about)
- [Features](#features)
- [Usage](#usage)
- [License](#license)
- [Previews](#previews)

## About
Allows users to load a GLB/GLTF model, add hotspots to it & create a snippet so they can copy the code straight to their website.

<p align="center">
 <a href="https://dave-kramer.github.io/modelviewer/">Use it here</a>
</p>

## Features
| Function | Information | 
| ------------- | ------------- |
| Add hotspot | Adds hotspot to loaded model. |
| Edit hotspot | Allows user to edit the hotspot size, color & allows for annotations. |
| Delete hotspot | Deletes hotspot from model. | 
| Auto-rotate | Enables auto-rotate. |
| Auto-rotate delay | Sets the delay before auto-rotation begins. |
| Hide hotspots | Hides all hotspots. | 
| Hide dimensions | Hides all dimensions. |
| Neutral Lighting | Enables neutral lighting. |
| Panning | Allows tapping on the model to move. |
| Camera Control | Enables camera controls. |
| Disable zoom | Disables zoom on the model. |
| Framing & Scaling | Changes the orientation and scale attributes which allow the model to be transformed. |
| Camera view | Sets camera orbit to user given degrees. |
| Shadows | Sets shadow intensity & softness. |
| Interaction | Sets interaction prompt & style upon loading model. |
| Create Snippet | Allows user to copy paste model including hotspots to their website. |

## Usage
### Using the tool
1. Go to the [GLB/GLTF Model Viewer & Editor](https://dave-kramer.github.io/modelviewer/).
2. Drag & drop or browse for your GLB/GLTF Model.
3. Add hotspots, edit them & play around with the functions till you have your desired model.
4. Click on Create Snippet.

### Placing it on your website
5. Place the scripts inside your <head> tag.
6. Place the model viewer inside your <body> tag.
7. Place the css inside your stylesheet.
8. Set the src="" inside the <model-viewer> tag to the folder that the model is in.
9. Make sure to give the <model-viewer> or the div its in a height & width.

That's it, you can now view the model.

## License
Consult google's model-viewer [respository](https://github.com/google/model-viewer) and their [Apache License 2.0](https://github.com/google/model-viewer/blob/master/LICENSE)

## Previews
<img src="https://github.com/dave-kramer/modelviewer/blob/main/previews/preview1.png" width="885" height="432">
<img src="https://github.com/dave-kramer/modelviewer/blob/main/previews/preview2.png" width="885" height="432">
