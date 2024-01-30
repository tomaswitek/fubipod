import {on} from "events";
import React from "react";
import {
  Scene as MarzipanoScene,
  CubeGeometry,
  ImageUrlSource,
  RectilinearView,
  useViewerContext,
  useSceneContext,
  Marzipano,
} from "react-marzipano-component";

interface Props {
  scene: any;
}

var element = document.getElementById("spot");

export function Scene(props: Props) {
  const {scene} = props;
  const viewer = useViewerContext();
  //   console.log(viewer);

  const sceneContext = useSceneContext();
  //   console.log(sceneContext);

  const onLoaded = (ref: any) => {
    scene.linkHotspots.forEach(function (hotspot: any) {
      //   var element = Marzipano.createLinkHotspotElement(hotspot);
      //   ref._hotspotContainer.createHotspot(element, {
      //     yaw: hotspot.yaw,
      //     pitch: hotspot.pitch,
      //   });
    });
    // console.log("onLoaded", ref._hotspotContainer.c);
  };

  return (
    <MarzipanoScene onLoaded={onLoaded}>
      <div id={`${scene.id}-`}></div>
      <ImageUrlSource
        source={`/tiles/${scene.id}/{z}/{f}/{y}/{x}.jpg`}
        options={{
          cubeMapPreviewUrl: `/tiles/${scene.id}/preview.jpg`,
        }}
      />
      <CubeGeometry levelPropertiesList={scene.levels} />
      <RectilinearView
        params={scene.initialViewParameters}
        limiters={(limit) => [
          limit.traditional(
            scene.faceSize,
            (100 * Math.PI) / 180,
            (120 * Math.PI) / 180
          ),
        ]}
      />
    </MarzipanoScene>
  );
}

export default Scene;
