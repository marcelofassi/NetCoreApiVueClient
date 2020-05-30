using System;
using System.Collections.Generic;

namespace Persistence.Models
{
    public partial class Feriados
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public string Descripcion { get; set; }
    }
}
