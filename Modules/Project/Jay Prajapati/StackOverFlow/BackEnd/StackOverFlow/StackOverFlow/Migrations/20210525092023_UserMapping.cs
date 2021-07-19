using Microsoft.EntityFrameworkCore.Migrations;

namespace StackOverFlow.Migrations
{
    public partial class UserMapping : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "AppUsers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppUsers_ApplicationUserId",
                table: "AppUsers",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppUsers_AspNetUsers_ApplicationUserId",
                table: "AppUsers",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppUsers_AspNetUsers_ApplicationUserId",
                table: "AppUsers");

            migrationBuilder.DropIndex(
                name: "IX_AppUsers_ApplicationUserId",
                table: "AppUsers");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "AppUsers");
        }
    }
}
