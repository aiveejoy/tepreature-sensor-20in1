$(document).ready(function () {
  var topic = ["bargs/jane", "mogal", "princechan", "group1/temperature", "genjess", "aspire/device", "z", "sensor/tanilonnadela"]
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
  client.on("connect", function () {
    console.log("Successfully connected");
    client.subscribe(topic);
  })
  client.on("message", function (topic, payload) {
    console.log("recieved:\ntopic: " + topic + "\npayload: " + payload);
    // $(topic).val(payload);
    // alert( $("#"+topic).val(payload))
    switch (topic) {
      case "group1/temperature":
        $("#BA").val(payload);
        break;
      case "mogal":
        $("#SM").val(payload);
        break;
      case "Hannah/Patrick/":
        $("#PC").val(payload);
        break;
      case "aspire/device":
        $("#CT").val(payload);
        break;
      case "princechan":
        $("#GD").val(payload);
        break;
      case "z":
        $("#DB").val(payload);
        break;
  case "sensor/tanilonnadela":
        $("#TN").val(payload);
        break;
    }
  })

})

