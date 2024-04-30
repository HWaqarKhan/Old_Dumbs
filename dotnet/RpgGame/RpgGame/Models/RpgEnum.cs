using System.Text.Json.Serialization;
namespace RpgGame.Models
{
/* The `[JsonConverter(typeof(JsonStringEnumConverter))]` attribute is used to specify that the
`RpgEnum` enum should be serialized and deserialized as a string when using the System.Text.Json
library. By default, enums are serialized as integers. */
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum RpgEnum
    {
        Knight = 1,
        Mage = 2,
        Cleric = 3
    }
}