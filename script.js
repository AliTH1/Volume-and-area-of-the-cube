"use strict";

function calculateVolumeAndArea(lengthCube) {
    if (lengthCube == isNaN() || !Number.isInteger(lengthCube) || lengthCube < 0) {
        return "При вычислении произошла ошибка";
    }
    
    let volume = lengthCube * lengthCube * lengthCube;
    let square = 6 * (lengthCube * lengthCube);
    return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;   
}
