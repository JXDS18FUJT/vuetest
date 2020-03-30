
/**
*@constructor
*@memberof 
*/
function GridDataDrawing() { }
/**
* 生成位图
* @param {Array.<Array.<Number>>}arr
* @param {GridDataColorMap}pColorMap
* @returns {Object} bmpImgObj  
* @returns {String} bmpImgObj.imageUrl DataURL String
* @returns {Number} bmpImgObj.width 
* @returns {Number} bmpImgObj.height 
*/
GridDataDrawing.getBmp = function (arr, pColorMap) {
    var colorMap = pColorMap ? pColorMap : ColorMap;
    var width = 0, height = arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            if (width < arr[i].length) {
                width = arr[i].length;
            }
        }
    }

    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    var imgData = ctx.createImageData(width, height); //getImageData(0, 0, width, height);

    for (var lat_j = 0; lat_j < height; lat_j++) {
        for (var lon_k = 0; lon_k < width; lon_k++) {
            var color = [0, 0, 0, 0];
            if (arr[lat_j]) {
                var v = arr[lat_j][lon_k];
                if (v !== undefined) {
                    for (var i = 0; i < colorMap.length; i++) {
                        var min = colorMap[i][0];
                        var max = colorMap[i][1];
                        if (v > min && v <= max) {
                            color = colorMap[i][2];
                            break;
                        }
                    }
                }
            }

            var pos = (lat_j * width + lon_k) * 4;
            imgData.data[pos] = color[0];
            imgData.data[pos + 1] = color[1];
            imgData.data[pos + 2] = color[2];
            if (typeof color[3] === 'number') {
                imgData.data[pos + 3] = color[3];
            } else {
                imgData.data[pos + 3] = 255;
            }

        }
    }
    ctx.putImageData(imgData, 0, 0);

    return {
        imageUrl: canvas.toDataURL(),
        width: canvas.width,
        height: canvas.height
    }
}


function draw(canvas, width, height, bounds, data) {
    var context, coords, point, latitude, longitude, xScale, yScale, scale;

    // Get the drawing context from our <canvas> and
    // set the fill to determine what color our map will be.
    context = canvas.getContext('2d');
    //context.fillStyle ='#333';// '#333';
    context.lineWidth = 2;
    context.strokeStyle = '#A71111';

    // Determine how much to scale our coordinates by
    xScale = width / Math.abs(bounds.xMax - bounds.xMin);
    yScale = height / Math.abs(bounds.yMax - bounds.yMin);
    scale = xScale < yScale ? xScale : yScale;

    // Again, we want to use the “features” key of
    // the FeatureCollection
    data = data.features;

    // Loop over the features…
    for (var i = 0; i < data.length; i++) {

        // …pulling out the coordinates…
        coords = data[i].geometry.coordinates[0];

        // …and for each coordinate…
        for (var j = 0; j < coords.length; j++) {

            longitude = coords[j][0];
            latitude = coords[j][1];

            // Scale the points of the coordinate
            // to fit inside our bounding box
            point = {
                x: (longitude - bounds.xMin) * scale,
                y: (bounds.yMax - latitude) * scale
            };

            // If this is the first coordinate in a shape, start a new path
            if (j === 0) {
                context.beginPath();
                context.moveTo(point.x, point.y);

                // Otherwise just keep drawing
            } else {
                context.lineTo(point.x, point.y);
            }
        }

        // Fill the path we just finished drawing with color
        //context.fill();
        context.stroke();
    }
}

function drawLocalXY(canvas, width, height, data, color) {
    var context, coords, point, latitude, longitude, xScale, yScale, scale;
    // Get the drawing context from our <canvas> and
    // set the fill to determine what color our map will be.
    context = canvas.getContext('2d');
    //context.fillStyle ='#333';// '#333';
    context.lineWidth = 1;
    context.strokeStyle = color; //'#A71111';

    for (var i = 0; i < data.length; i++) {
        // for (let k = 0; k < data.coordinates[i].length; k++) {
        //   for (let p = 0; p < data.coordinates[i][k].length; p++) {

        point = {
            x: data[i][0],
            y: height - data[i][1]
        }

        // If this is the first coordinate in a shape, start a new path
        if (i === 0) {
            context.beginPath();
            context.moveTo(point.x, point.y);

            // Otherwise just keep drawing
        } else {
            context.lineTo(point.x, point.y);
            //   }

            // }
        }


    }
    context.stroke();
}
