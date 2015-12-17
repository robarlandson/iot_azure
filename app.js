// Add reference to the Azure IoT Hub device library
var device = require('azure-iot-device');
console.log(device);
// Define the connection string to connect to IoT Hub
var connectionString = 'HostName=ird-iot.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=wGWkFTnlKX6TYRTu/dVUjMdIKQOr+gdmPWzAc3w0Otk=';
// Create the client instance specifying the preferred protocol
var client = new device.Client(connectionString, new device.Https());
// Create a message and send it to IoT Hub.
//var data = JSON.stringify({ '6aU52Ll34wVIYcpSgjBUWGMD6cDAYEMbpno9qWa+9FQ=': 'myFirstDevice', 'data': 'mydata' });

//var message = new device.Message(data);
//message.properties.add('myproperty', 'myvalue');
//client.sendEvent(message, function(err, res){
//    if (err) console.log('SendEvent error: ' + err.toString());
//    if (res) console.log('SendEvent status: ' + res.statusCode + ' ' + res.statusMessage);
//});



// Receive messages from IoT Hub
client.receive(function (err, res, msg) {
  console.log('receive data: ' + msg.getData());
  client.complete(msg, function (err, res) {
    if (err) console.log('Complete error: ' + err.toString());
    if (res) console.log('Complete status: ' + res.statusCode + ' ' + res.statusMessage);
  });
});