using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectHotstar.Migrations
{
    public partial class addImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TvImage",
                table: "TV",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SportsImage",
                table: "Sports",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NewsImage",
                table: "News",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MovieImage",
                table: "Movies",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TvImage",
                table: "TV");

            migrationBuilder.DropColumn(
                name: "SportsImage",
                table: "Sports");

            migrationBuilder.DropColumn(
                name: "NewsImage",
                table: "News");

            migrationBuilder.DropColumn(
                name: "MovieImage",
                table: "Movies");
        }
    }
}
