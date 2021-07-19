using Microsoft.EntityFrameworkCore.Migrations;

namespace ToyStore.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //var sp = @"Create PROCEDURE [dbo].[GetOrder]
            //        @Id int
            //    AS
            //    BEGIN
            //        SET NOCOUNT ON;
            //        select * from Order where @Id =Id
            //    END";

            //migrationBuilder.Sql(sp);
            var sp = @"CREATE PROCEDURE [dbo].[GetOrder]
                    @Id int
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Order where @Id = Id
                END";

            migrationBuilder.Sql(sp);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
