// 452. Minimum Number of Arrows to Burst Balloons

// Problem statement:

// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons. Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path. Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

// Understand the problem first:

// sb se pehle aik baat ke agr apko problem statement smjh na ayi tu koi baat nahi kyu ke pathetic kisam ki problem statement hy. Chle ao me smjata ho apko. Hmare pas kuch points hy jo ke aik random order me die hue hy aur ye bi maan le ke hr point aik ballon ko represent kr raha hy aur hme min number of arrows find krne hy jin se hum un ballons ko podh paye. means jitne ziada ballons aik point pe mil jaye utni asani.

// Approach and Solution:

// Sb se pehle hum apne points ko sort kr ge then pir ye check kre ge ke agr overlap hote hy ballons tu teek hy mazeed find kre ge nahi tu aik arrow allocate kr de ge us aik ballon ko podne ke liye.

var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    
    let prev = points[0];
    let arrows = 1;

    for (let i = 1; i < points.length; i++) {
        let currentStartingPoint = points[i][0];
        let currentEndingPoint = points[i][1];

        let prevStartingPoint = prev[0];
        let prevEndingPoint = prev[1];

        if (currentStartingPoint > prevEndingPoint) {
            arrows++;
            prev = points[i];
        } else {
            prev[0] = Math.max(currentStartingPoint, prevStartingPoint);
            prev[1] = Math.min(prevEndingPoint, currentEndingPoint)
        };
    };

    return arrows;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // 2
