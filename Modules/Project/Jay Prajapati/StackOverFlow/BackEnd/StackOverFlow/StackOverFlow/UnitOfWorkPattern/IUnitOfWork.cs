using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.UnitOfWorkPattern
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository AppUsers { get; }
        IAnswerRepository Answer { get; }
        IBadgeRepository Badge { get; }
        IBadgesEarnedByUserRepository BadgesEarnedByUser { get; }
        IBookmarkRepository Bookmark { get; }
        ICompaniesToExcludeRepository CompaniesToExclude { get; }
        IEducationRepository Education { get; }
        IIndustriesToExcludeRepository IndustriesToExclude { get; }
        IJobProfileRepository JobProfile { get; }
        IQuestionRepository Question { get; }
        ITagRepository Tag { get; }
        ITechnologiesUsedAsStudentRepository TechnologiesUsedAsStudent { get; }
        ITechPreferNotToWorkWithRepository TechPreferNotToWorkWith { get; }
        ITechWantToWorkWithRepository TechWantToWorkWith { get; }
        IVwBadgesDetailRepository VwBadgesDetail { get; }
        IVwQuestionDetailRepository VwQuestionDetail { get; }
        IVwUserQADetailRepository VwUserQADetail { get; }
        IWorkExperienceRepository WorkExperience { get; }
        IWhereUserLikeToWorkRepository WhereUserLikeToWork { get; }
        ITechnologiesUsedByUserInJobRepository TechnologiesUsedByUserInJob { get; }
        IVoteRepository Vote { get; }
        int Complete();
    }
}
