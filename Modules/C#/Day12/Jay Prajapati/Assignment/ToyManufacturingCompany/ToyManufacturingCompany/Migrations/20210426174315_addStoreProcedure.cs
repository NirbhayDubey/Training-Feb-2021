using Microsoft.EntityFrameworkCore.Migrations;

namespace ToyManufacturingCompany.Migrations
{
    public partial class addStoreProcedure : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE GetCustomer
                    @FirstName NVARCHAR(50)
                AS
                BEGIN
                    select * from Customers where FirstName like @FirstName +'%'
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
