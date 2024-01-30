export const data = {
  scenes: [
    {
      id: "0-exterier-travnik",
      name: "exterier-travnik",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        yaw: 0.08357349229951794,
        pitch: 0,
        fov: 1.573558761247498,
      },
      linkHotspots: [
        {
          yaw: 0.12017570303073022,
          pitch: 0.16944367146837358,
          rotation: 7.0685834705770345,
          target: "1-exterier-terasa",
        },
        {
          yaw: -0.4151669032732386,
          pitch: 0.12950549369830355,
          rotation: 0,
          target: "2-interier-jidelna",
        },
        {
          yaw: -0.7454986446102563,
          pitch: 0.13433001402557565,
          rotation: 0,
          target: "3-interier-obyvak",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-exterier-terasa",
      name: "exterier-terasa",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.7243620273825186,
          pitch: 0.23502803796497496,
          rotation: 6.283185307179586,
          target: "2-interier-jidelna",
        },
        {
          yaw: 1.5377204931482042,
          pitch: 0.26751457225902087,
          rotation: 0,
          target: "4-interier-loznice",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-interier-jidelna",
      name: "interier-jidelna",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        yaw: 0.4481383619344612,
        pitch: 0.4479175728521021,
        fov: 1.573558761247498,
      },
      linkHotspots: [
        {
          yaw: -3.1405643943639596,
          pitch: 0.23494920203338765,
          rotation: 0,
          target: "1-exterier-terasa",
        },
        {
          yaw: -0.8212033285016282,
          pitch: 0.3163776763876385,
          rotation: 0,
          target: "3-interier-obyvak",
        },
        {
          yaw: 0.7831837488737037,
          pitch: 0.1993280103231907,
          rotation: 3.9269908169872414,
          target: "10-interier-kuchyn",
        },
        {
          yaw: 2.1744637913002647,
          pitch: 0.5001241528828135,
          rotation: 0,
          target: "8-interier-chodba",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "3-interier-obyvak",
      name: "interier-obyvak",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.0663858240407293,
          pitch: 0.3376243082698398,
          rotation: 4.71238898038469,
          target: "2-interier-jidelna",
        },
        {
          yaw: 0.3876902986735473,
          pitch: 0.1397735376139373,
          rotation: 3.141592653589793,
          target: "10-interier-kuchyn",
        },
        {
          yaw: 1.943963094466831,
          pitch: 0.17439037955641012,
          rotation: 3.9269908169872414,
          target: "1-exterier-terasa",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-interier-loznice",
      name: "interier-loznice",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        yaw: -3.096343071575866,
        pitch: 0.5884471180524358,
        fov: 1.573558761247498,
      },
      linkHotspots: [
        {
          yaw: -2.4062207405077434,
          pitch: 0.37622986043242435,
          rotation: 0,
          target: "1-exterier-terasa",
        },
        {
          yaw: -1.3217422649775923,
          pitch: 0.251092112341734,
          rotation: 0,
          target: "7-interier-chodba-konec",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-interier-pracovna",
      name: "interier-pracovna",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.455463839216641,
          pitch: 0.5048074572718804,
          rotation: 0,
          target: "7-interier-chodba-konec",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "6-interier-vhod",
      name: "interier-vhod",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "7-interier-chodba-konec",
      name: "interier-chodba-konec",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.3875336913029166,
          pitch: 0.336487365115552,
          rotation: 5.497787143782138,
          target: "8-interier-chodba",
        },
        {
          yaw: 1.0034529629970308,
          pitch: 0.5851431292961244,
          rotation: 0.7853981633974483,
          target: "9-interier-koupelna",
        },
        {
          yaw: -1.1607614588020247,
          pitch: 0.3079273112156109,
          rotation: 0,
          target: "4-interier-loznice",
        },
        {
          yaw: -2.9406325614017206,
          pitch: 0.4645583000311664,
          rotation: 0,
          target: "5-interier-pracovna",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-interier-chodba",
      name: "interier-chodba",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.498015632444238,
          pitch: 0.3899730985215264,
          rotation: 0,
          target: "2-interier-jidelna",
        },
        {
          yaw: -0.6473314164372077,
          pitch: 0.49903868761697723,
          rotation: 0,
          target: "7-interier-chodba-konec",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "9-interier-koupelna",
      name: "interier-koupelna",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.6709232287694356,
          pitch: 0.581336515722338,
          rotation: 5.497787143782138,
          target: "7-interier-chodba-konec",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "10-interier-kuchyn",
      name: "interier-kuchyn",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.5327633316223839,
          pitch: 0.27618687054964575,
          rotation: 3.141592653589793,
          target: "3-interier-obyvak",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
