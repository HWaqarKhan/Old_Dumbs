using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RpgGame.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Frodo";
        public int HitPoints { get; set; } = 100;
        public int Defense { get; set; } = 10;
        public int Strength { get; set; } = 10;
        public int Intelligence { get; set; } = 10;
        public RpgEnum rgpEnum { get; set; } = RpgEnum.Knight;

        // public RpgEnum rgpEnum { get => rgpEnum; set => rgpEnum = value; }
    }
}