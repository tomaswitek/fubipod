"use client";
import {Viewer as MarzipanoViewer} from "react-marzipano-component";
import {data} from "./data";
import {Scene} from "./Scene";

export function Viewer() {
  const viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode,
    },
  };
  return (
    <MarzipanoViewer style={{position: "absolute", inset: 0}} opts={viewerOpts}>
      {data.scenes.map((scene) => (
        <Scene key={scene.id} scene={scene} />
      ))}
    </MarzipanoViewer>
  );
}
