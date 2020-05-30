using System;
using System.Collections.Generic;

namespace Persistence.Models
{
    public partial class Ubicaciones
    {
        public int IdUbicacion { get; set; }
        public string Descripcion { get; set; }
        public bool Activo { get; set; }
    }
}
