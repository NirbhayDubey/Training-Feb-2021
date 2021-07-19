namespace ToyManufacturingCompany.Models
{
    public class ProductOrder
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int ToyId { get; set; }
        public int OrderId { get; set; }
        public Order order { get; set; }
        public Toy Toy { get; set; }
        public int CustomerId { get; set; }
        
       
    }
}