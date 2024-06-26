﻿namespace Maphreca.Components.Models
{
    public class ProductosModel{ 
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Cantidad { get; set; }
        public string Codigo { get; set; }
        public string? CodigoLote { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public DateTime Fecha{ get; set; } = DateTime.Now;
    }
}
