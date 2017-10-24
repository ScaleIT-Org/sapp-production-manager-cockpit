using System.IO;
using System.Net.WebSockets;
using System.Text;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Xml;
using WebSocketManager;

namespace DataCommunication
{
    public class DataCommunicationHandler : WebSocketHandler
    {
        private string dataPath = "";
        public DataCommunicationHandler(WebSocketConnectionManager webSocketConnectionManager) : base(webSocketConnectionManager)
        {
            //Read Config.xml
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddXmlFile("config.xml", optional: true, reloadOnChange: true)
                .Build();

            dataPath = config["datasource"];
            Console.WriteLine("Data source file path: ");
            Console.WriteLine(dataPath);
        }

        public override async Task OnConnected(WebSocket socket)
        {
            await base.OnConnected(socket);
            
            var socketId = WebSocketConnectionManager.GetId(socket);

            //Read datfile
            var file = File.OpenText(dataPath);
            string jsonString = file.ReadToEnd();

            //Parse JSON
            /*JsonObject value = (JsonObject)JsonObject.Parse(jsonString);
            Console.WriteLine(value["fpyLine1"]["Friday"].ToString());*/

            Console.WriteLine($"Client connected: {socketId}");
            await SendMessageToAllAsync(jsonString);
        }

        public override async Task ReceiveAsync(WebSocket socket, WebSocketReceiveResult result, byte[] buffer)
        {
            var socketId = WebSocketConnectionManager.GetId(socket);
            var message = $"{socketId} said: {Encoding.UTF8.GetString(buffer, 0, result.Count)}";

            //Read datfile
            var file = File.OpenText(dataPath);
            string jsonString = file.ReadToEnd();

            await SendMessageToAllAsync(jsonString);
        }
    }
}