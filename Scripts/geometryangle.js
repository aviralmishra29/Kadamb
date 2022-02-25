$('.u-section-1').Geometryangle(
    {
        // handle transparent colors
        mesh:{
        
        width: 1.2,
        height: 1.2,
        
        // How far should the mesh vary into z-space.
        depth: 10,
        
        // Number of columns for the mesh.
        columns: undefined,
        
        columns_auto: true,
        
        // Number of rows for the mesh.
        rows: undefined,
        
        rows_auto: true,
        zoom: 1,
        xRange: 0.8,
        yRange: 0.1,
        zRange: 1.0,
        ambient: 'rgb(0,255,255)',
        diffuse: 'rgb(0,255,255)',
        
        background: 'rgb(126, 200, 227)',
        speed: 0.001,
        fluctuationSpeed: 0.5,
        fluctuationIntensity: 0,
        onRender: function () {
        },
        floorPosition: false,
        draw: true
        
        }, 
        
        lights: {
        
        // How many light sources belong to this light.
        count: 1,
        
        xyScalar: 1,
        
        // Position of light source.
        zOffset: 100,
        
        ambient: 'rgb(13, 0, 253)',
        diffuse: 'rgb(13, 0, 253)',
        speed: 0.010,
        gravity: 1200,
        
        // Dampening of light's movements.
        dampening: 0.95,
        
        minLimit: 10,
        maxLimit: null,
        minDistance: 20,
        maxDistance: 400,
        autopilot: false,
        draw: false, //show circle
        bounds: FSS.Vector3.create(),
        step: FSS.Vector3.create(
            Math.randomInRange(0.2, 1.0),
            Math.randomInRange(0.2, 1.0),
            Math.randomInRange(0.2, 1.0)
        )
        
        },
        
        // specify the thickness, color, stroke, etc. 
        line: {
        
        fill: "rgba(255, 255, 255, 0)",
        thickness: 10,
        fluctuationIntensity: 11,
        fluctuationSpeed: 0.5,
        draw: true
        
        }, 
        
        // Set the point attributes for the vertex. 
        vertex: {
        
        // Radius of vertice circle.
        radius: 33,
        
        fill: "rgba(21, 12, 0, 0)",
        
        // Fluctuates opacity of vertex.
        fluctuationSpeed: 0.5,
        
        fluctuationIntensity: 32,
        strokeWidth: 213,
        strokeColor: "rgba(0, 0, 0, 0)",
        
        // Instead of setting alpha channel to zero
        // Set draw to false to avoid computing.
        // draw: false
        
        }
    }
);
