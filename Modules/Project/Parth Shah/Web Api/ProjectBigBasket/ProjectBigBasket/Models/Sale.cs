using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectBigBasket.Models
{
    public partial class Sale
    {
        public string Id { get; set; }
        public string ProductId { get; set; }
        public int ProductQty { get; set; }
        public double Discount { get; set; }
        public decimal GrossAmount { get; set; }
        public DateTime InvoiceDate { get; set; }
        public decimal ProductPrice { get; set; }
        public string CustId { get; set; }
        public string ShippedAddress { get; set; }
        public decimal Taxes { get; set; }
        public decimal InvoiceAmount { get; set; }

        public virtual Customer Cust { get; set; }
        public virtual Product Product { get; set; }
    }
}
