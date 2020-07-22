var sourceExpression = `var t = time;
function findMarker(tt) {
  var l = thisLayer.marker.numKeys;
  for (var i = 1; i <= l; i++) {
    var mm = thisLayer.marker.key(i);
    if (t >= mm.time && t < mm.time + mm.duration) {
      return mm;
      break;
    }
  }
  return 0;
}
var m = findMarker(t);

if (m) {
  if (t >= m.time && t < m.time + m.duration) {
    text.sourceText = m.comment ? m.comment : "";
  } else {
    text.sourceText = "";
  }
} else {
  text.sourceText = "";
}
`;
