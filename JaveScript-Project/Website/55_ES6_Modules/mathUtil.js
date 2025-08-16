const PI = 3.14159;

function getCircumference(radius) {
    return 2 * PI * radius;
}

function getArea(radius) {
    return PI * radius * radius;
}

export { PI, getCircumference, getArea };