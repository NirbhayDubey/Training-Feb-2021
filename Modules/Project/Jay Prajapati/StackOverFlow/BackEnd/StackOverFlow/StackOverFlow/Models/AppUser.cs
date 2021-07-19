using StackOverFlow.Models.Authentication;
using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlow.Models
{
    public partial class AppUser
    {
        public AppUser()
        {
            Answers = new HashSet<Answer>();
            BadgesEarnedByUsers = new HashSet<BadgesEarnedByUser>();
            Bookmarks = new HashSet<Bookmark>();
            CompaniesToExcludes = new HashSet<CompaniesToExclude>();
            Educations = new HashSet<Education>();
            IndustriesToExcludes = new HashSet<IndustriesToExclude>();
            JobProfiles = new HashSet<JobProfile>();
            Questions = new HashSet<Question>();
            TechPreferNotToWorkWiths = new HashSet<TechPreferNotToWorkWith>();
            TechWantToWorkWiths = new HashSet<TechWantToWorkWith>();
            TechnologiesUsedAsStudents = new HashSet<TechnologiesUsedAsStudent>();
            WhereUserLikeToWorks = new HashSet<WhereUserLikeToWork>();
            WorkExperiences = new HashSet<WorkExperience>();
        }

        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        public int? VisitedDays { get; set; }
        public int? Reputation { get; set; } // New column Added
        public string GitHub { get; set; }
        public string Twitter { get; set; }
        public string Location { get; set; }
        public DateTime? LastSeen { get; set; }
        public int? ProfileViews { get; set; }
        public string AboutUser { get; set; }
        public string ApplicationUserId { get; set; }
        public ApplicationUser applicationUser { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }
        public virtual ICollection<BadgesEarnedByUser> BadgesEarnedByUsers { get; set; }
        public virtual ICollection<Bookmark> Bookmarks { get; set; }
        public virtual ICollection<CompaniesToExclude> CompaniesToExcludes { get; set; }
        public virtual ICollection<Education> Educations { get; set; }
        public virtual ICollection<IndustriesToExclude> IndustriesToExcludes { get; set; }
        public virtual ICollection<JobProfile> JobProfiles { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
        public virtual ICollection<TechPreferNotToWorkWith> TechPreferNotToWorkWiths { get; set; }
        public virtual ICollection<TechWantToWorkWith> TechWantToWorkWiths { get; set; }
        public virtual ICollection<TechnologiesUsedAsStudent> TechnologiesUsedAsStudents { get; set; }
        public virtual ICollection<WhereUserLikeToWork> WhereUserLikeToWorks { get; set; }
        public virtual ICollection<WorkExperience> WorkExperiences { get; set; }
    }
}
