function Interpolate() {

}

 /**
    *Create grid x/y coordinate arrays with x/y delt
    *@param {Number}Xlb X of left-bottom
    *@param {Number}Ylb Y of left-bottom
    *@param {Number}Xrt X of right-top
    *@param {Number}Yrt Y of right-top
    *@param {Number}XDelt X delt
    *@param {Number}YDelt Y delt
    *@return {Array<Array<Number>>}gridXY 
    */
    Interpolate.CreateGridXY_Delt = function (Xlb, Ylb, Xrt, Yrt, XDelt, YDelt) {
    var num = parseInt((Xrt - Xlb) / XDelt + 1.0);
    var num2 = parseInt((Yrt - Ylb) / YDelt + 1.0);
    var refX = new Float32Array(num);
    var refY = new Float32Array(num2);
    for (var i = 0; i < num; i++) {
        refX[i] = Xlb + i * XDelt;
    }
    for (var i = 0; i < num2; i++) {
        refY[num2 - 1 - i] = Ylb + i * YDelt;
    }

    return [refX, refY];
}
/**
*Create grid x/y coordinate arrays with x/y number
*@param {Number}Xlb X of left-bottom
*@param {Number}Ylb Y of left-bottom
*@param {Number}Xrt X of right-top
*@param {Number}Yrt Y of right-top
*@param {Number}Xnum X number
*@param {Number}Ynum Y number
*@return {Array<Array<Number>>}gridXY 
*/
Interpolate.CreateGridXY_Num = function (Xlb, Ylb, Xrt, Yrt, Xnum, Ynum) {
    var refX = new Float32Array(Xnum);
    var refY = new Float32Array(Ynum);
    var num = (Xrt - Xlb) / parseFloat(Xnum);
    var num2 = (Yrt - Ylb) / parseFloat(Ynum);
    for (var i = 0; i < Xnum; i++) {
        refX[i] = Xlb + i * num;
    }
    for (var i = 0; i < Ynum; i++) {
        refY[Ynum - 1 - i] = Ylb + i * num2;
    }
    return [refX, refY];
}

/**
     *Interpolation with IDW neighbor method
     *@param {Array<Array<Number>>}SCoords Discrete data array
     *@param {Array<Number>}X Grid X array
     *@param {Array<Number>}Y Grid Y array
     *@param {Number}NumberOfNearestNeighbors Number of nearest neighbors
     *@param {turf.polygon}[outPolygon=undefined] 
     *@return {Array<Array<Number>>}Interpolated grid Data
     */
    Interpolate.Interpolation_IDW_Neighbor = function (SCoords, X, Y, NumberOfNearestNeighbors, outPolygon) {
        
        var num = X.length;
        var num2 = Y.length;
        var length = SCoords[0].length;
        var array = new Array(num2);//, num];
        for (var i = 0; i < num2; i++) {
            array[i] = new Float32Array(num);
        }
        var array2 = [new Float32Array(NumberOfNearestNeighbors), new Float32Array(NumberOfNearestNeighbors)];
        for (var i = 0; i < num2; i++) {
            for (var j = 0; j < num; j++) {
                array[i][j] = -999.0;
                var num3 = 0.0;
                var num4 = 0.0;
                for (var k = 0; k < NumberOfNearestNeighbors; k++) {
                    if (Math.pow(X[j] - SCoords[0][k], 2.0) + Math.pow(Y[i] - SCoords[1][k], 2.0) == 0.0) {
                        array[i][j] = SCoords[2][k];
                        break;
                    }
                    var num5 = 1.0 / (Math.pow(X[j] - SCoords[0][k], 2.0) + Math.pow(Y[i] - SCoords[1][k], 2.0));
                    array2[0][k] = num5;
                    array2[1][k] = k;
                }
                if (array[i][j] == -999.0) {
                    for (var k = NumberOfNearestNeighbors; k < length; k++) {
                        if (Math.pow(X[j] - SCoords[0][k], 2.0) + Math.pow(Y[i] - SCoords[1][k], 2.0) == 0.0) {
                            array[i][j] = SCoords[2][k];
                            break;
                        }
                        var num5 = 1.0 / (Math.pow(X[j] - SCoords[0][k], 2.0) + Math.pow(Y[i] - SCoords[1][k], 2.0));
                        var num6 = array2[0][0];
                        var num7 = 0;
                        for (var l = 1; l < NumberOfNearestNeighbors; l++) {
                            if (array2[0][l] < num6) {
                                num6 = array2[0][l];
                                num7 = l;
                            }
                        }
                        if (num5 > num6) {
                            array2[0][num7] = num5;
                            array2[1][num7] = k;
                        }
                    }
                    if (array[i][j] == -999.0) {
                        for (var k = 0; k < NumberOfNearestNeighbors; k++) {
                            num3 += array2[0][k] * SCoords[2][parseInt(array2[1][k])];
                            num4 += array2[0][k];
                        }
                        array[i][j] = num3 / num4;
                    }
                }
            }
        }
        var num8 = 0.5;
        for (var i = 1; i < num2 - 1; i++) {
            for (var j = 1; j < num - 1; j++) {
                array[i][j] += num8 / 4.0 * (array[i + 1][j] + array[i - 1][j] + array[i][j + 1] + array[i][j - 1] - 4.0 * array[i][j]);
            }
        }
        console.log(num2, num)
/*         var pt = turf.point([117.19812774658203, 38.5]);
var poly = turf.polygon([[
  [116.64033513329923, 39.08441160432995],
  [117.34785468131304, 39.06903077010066],
  [117.2189027890563, 38.54113769531249],
  [116.62564090266824, 38.64440911263227],
  [116.64033513329923, 39.08441160432995],
]]);

console.log(turf.booleanPointInPolygon(pt, poly)); */
/*         num2 = 100;
        num = 100; */
        console.log(X[j], Y[i])
        if (outPolygon) {//裝切
            for (var i = 0; i < num2 ; i++) {
                for (var j = 0; j < num  ; j++) {
                    var pt = turf.point([X[j], Y[i]]);
                    var isInside = turf.booleanPointInPolygon(pt, outPolygon.features[0]);
                    if (!isInside) {
                        array[i][j] = -999.0;
                    }
                }
            }
        }

        array2 = [];
        array.reverse();
        return array;
    }