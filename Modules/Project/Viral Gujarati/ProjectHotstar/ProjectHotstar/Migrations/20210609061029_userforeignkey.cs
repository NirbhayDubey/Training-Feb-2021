using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectHotstar.Migrations
{
    public partial class userforeignkey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_UserAccount_ApplicationUserId",
                table: "UserAccount");
                //newName: "IX_UserAccount_ApplicationUserId1");

            migrationBuilder.CreateIndex(
                name: "IX_UserAccount_ApplicationUserId",
                table: "UserAccount",
                column: "ApplicationUserId",
                unique: true,
                filter: "[ApplicationUserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_UserAccount_AspNetUsers_ApplicationUserId",
                table: "UserAccount",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserAccount_AspNetUsers_ApplicationUserId",
                table: "UserAccount");

            migrationBuilder.DropIndex(
                name: "IX_UserAccount_ApplicationUserId",
                table: "UserAccount");

            migrationBuilder.CreateIndex(
                name: "IX_UserAccount_ApplicationUserId",
                table: "UserAccount",
                column: "ApplicationUserId",
                unique: true,
                filter: "[ApplicationUserId] IS NOT NULL");


            //newName: "IX_UserAccount_ApplicationUserId");
        }
    }
}
