
var peepholes = Object.keys(realPeepHolesCounter);
var data = peepholes.map(function (name) { return { name: name, data: realPeepHolesCounter[name] }; })
data.sort(function (a, b) { return b.data.counter - a.data.counter; })