using System;
using System.Collections.Generic;

namespace Persistence.Models
{
    public partial class Adjuntos
    {
        public int IdAdjunto { get; set; }
        public string NombreArchivo { get; set; }
        public string Path { get; set; }
    }
}
