using Microsoft.EntityFrameworkCore;
using Maphreca.Components.Models;

namespace Maphreca.Components.Data
{
    public class ProductosContext : DbContext
    {
        public ProductosContext(DbContextOptions<ProductosContext> options)
            : base(options)
        {
        }

        public DbSet<ProductosModel>? Productos { get; set; }
    }
}
