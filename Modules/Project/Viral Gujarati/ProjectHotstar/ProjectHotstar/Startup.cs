using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using ProjectHotstar.Models;
using Project_Hotstar.Models.Authentication;
using ProjectHotstar.Repository.GenericRepository;
using ProjectHotstar.Repository.IGenericRepository;
using System.Text;
//using System.Web.Http.Cors;
//using Microsoft.AspNetCore.Cors;

namespace ProjectHotstar
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.  
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFrameworkSqlServer();

            services.AddTransient<IUserAccount, UserAccountRepo>();
            services.AddTransient<ITV, TVRepo>();
            services.AddTransient<ISport, SportRepo>();
            services.AddTransient<IPlan, PlanRepo>();
            services.AddTransient<IPlanFeature, PlanFeatureRepo>();
            services.AddTransient<INews, NewsRepo>();
            services.AddTransient<IMovie, MovieRepo>();
            services.AddTransient<IContent, ContentRepo>();
            services.AddTransient<ISubscription, SubscriptionRepo>();


            services.AddControllers();


            // For Entity Framework  
            services.AddDbContext<HotstarContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));

            services.AddCors(options =>
            {
                options.AddPolicy(name: "policy1",
                builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });


            //// For Identity  
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<HotstarContext>()
            .AddDefaultTokenProviders();

            // Adding Authentication  
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })

            // Adding Jwt Bearer  
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = Configuration["JWT:ValidAudience"],
                    ValidIssuer = Configuration["JWT:ValidIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.  
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();


            }
              

            app.UseRouting();
            app.UseCors("policy1");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}