using System;
using System.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Xml;

namespace productionManagerCockpit
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddXmlFile("config.xml", optional: true, reloadOnChange: true)
                .Build();

            string setting = config["datasource"];
            Console.WriteLine("Data source file path: ");
            Console.WriteLine(setting);

            var file = File.OpenText(setting);
            string jsonString = file.ReadToEnd();
            JsonObject value = (JsonObject)JsonObject.Parse(jsonString);
            Console.WriteLine("Data source file content: ");
            Console.WriteLine(value["fpyLine1"].ToString());
           

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseWebRoot(Path.Combine(Directory.GetCurrentDirectory(), ".", "www"))
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
