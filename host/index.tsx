// @ts-nocheck

function test(val) {
  var data = [
    {
      start: [00, 00, 2],
      end: [00, 00, 6],
      text: "Hello World",
    },
    {
      start: [00, 00, 6],
      end: [00, 00, 10],
      text: "I am Mohsin",
    },
  ];

  var comp = app.project.activeItem;
  var subtitles = comp.layers.addText("Subtitles");

  for (var i = 0; i < data.length; i++) {
    alert(data[i].text);
    var markerProperty = subtitles.property("ADBE Marker");
    var marker = new MarkerValue(data[i].text);
    marker.duration = data[i].end[2] - data[i].start[2];
    markerProperty.setValueAtTime(data[i].start[2], marker);
  }

  var sourceText = subtitles
    .property("ADBE Text Properties")
    .property("ADBE Text Document");

  sourceText.expression = sourceExpression;
}
