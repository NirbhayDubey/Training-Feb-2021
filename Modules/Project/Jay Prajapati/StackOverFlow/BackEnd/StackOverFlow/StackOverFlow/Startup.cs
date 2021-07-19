using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.Repositories;
using StackOverFlow.Repositories.Interface;
using StackOverFlow.UnitOfWorkPattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StackOverFlow
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
            
            services.AddControllers();


            // Repository Register
            services.AddTransient(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddTransient<IUserRepository, UserRepository>();

            services.AddTransient<IAnswerRepository, AnswerRepository>();
            services.AddTransient<IBadgeRepository, BadgeRepository>();
            services.AddTransient<IBadgesEarnedByUserRepository, BadgesEarnedByUserRepository>();
            services.AddTransient<IBookmarkRepository, BookmarkRepository>();
            services.AddTransient<IEducationRepository, EducationRepository>();
            services.AddTransient<ICompaniesToExcludeRepository, CompaniesToExcludeRepository>();
            services.AddTransient<IJobProfileRepository, JobProfileRepository>();
            services.AddTransient<IQuestionRepository, QuestionRepository>();
            services.AddTransient<ITagRepository, TagRepository>();
            services.AddTransient<ITechnologiesUsedAsStudentRepository, TechnologiesUsedAsStudentRepository>();
            services.AddTransient<ITechnologiesUsedByUserInJobRepository, TechnologiesUsedByUserInJobRepository>();
            services.AddTransient<ITechPreferNotToWorkWithRepository, TechPreferNotToWorkWithRepository>();
            services.AddTransient<ITechWantToWorkWithRepository, TechWantToWorkWithRepository>();
            services.AddTransient<IVwBadgesDetailRepository, VwBadgesDetailRepository>();
            services.AddTransient<IVwQuestionDetailRepository, VwQuestionDetailRepository>();
            services.AddTransient<IVwUserQADetailRepository, VwUserQADetailRepository>();
            services.AddTransient<IWorkExperienceRepository, WorkExperienceRepository>();
            services.AddTransient<IWhereUserLikeToWorkRepository, WhereUserLikeToWorkRepository>();
            services.AddTransient<IVoteRepository, VoteRepository>();

            services.AddTransient<IUnitOfWork, UnitOfWork>();

            // For Entity Framework  
            services.AddDbContext<StackOverFlowContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ConnStr")));
            

            // For Identity  
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<StackOverFlowContext>()
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


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "StackOverFlow", Version = "v1" });
            });


            services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
            options.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "StackOverFlow v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
