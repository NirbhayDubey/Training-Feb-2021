using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectHotstar.Migrations
{
    public partial class useraccountchanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "UserAccount",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "UserAccount",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "string");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "PhoneNumber",
                table: "UserAccount",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
               name: "Address",
               table: "UserAccount",
               type: "string",
               nullable: false,
               defaultValue: 0,
               oldClrType: typeof(string),
               oldType: "nvarchar(max)",
               oldNullable: true);
        }
    }
}
