using Microsoft.EntityFrameworkCore.Migrations;

namespace StackOverFlow.Migrations
{
    public partial class changes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "QuestionBody",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Reputation",
                table: "AppUsers",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuestionBody",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "Reputation",
                table: "AppUsers");
        }
    }
}
