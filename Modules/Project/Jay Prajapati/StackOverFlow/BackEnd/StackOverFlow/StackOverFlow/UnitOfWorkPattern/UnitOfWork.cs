using StackOverFlow.Models;
using StackOverFlow.Repositories;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.UnitOfWorkPattern
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StackOverFlowContext _context;


        public UnitOfWork(StackOverFlowContext context)
        {
            _context = context;
            AppUsers = new UserRepository(context);
            Answer = new AnswerRepository(context);
            Badge = new BadgeRepository(context);
            BadgesEarnedByUser = new BadgesEarnedByUserRepository(context);
            Bookmark = new BookmarkRepository(context);
            CompaniesToExclude = new CompaniesToExcludeRepository(context);
            Education = new EducationRepository(context);
            IndustriesToExclude = new IndustriesToExcludeRepository(context);
            JobProfile = new JobProfileRepository(context);
            Question = new QuestionRepository(context);
            Tag = new TagRepository(context);
            TechnologiesUsedAsStudent = new TechnologiesUsedAsStudentRepository(context);
            TechPreferNotToWorkWith = new TechPreferNotToWorkWithRepository(context);
            TechWantToWorkWith = new TechWantToWorkWithRepository(context);
            VwBadgesDetail = new VwBadgesDetailRepository(context);
            VwQuestionDetail = new VwQuestionDetailRepository(context);
            VwUserQADetail = new VwUserQADetailRepository(context);
            WorkExperience = new WorkExperienceRepository(context);
            WhereUserLikeToWork = new WhereUserLikeToWorkRepository(context);
            TechnologiesUsedByUserInJob = new TechnologiesUsedByUserInJobRepository(context);
            Vote = new VoteRepository(context);

        }


        public IUserRepository AppUsers { get; private set; }

        public IAnswerRepository Answer { get; private set; }

        public IBadgeRepository Badge { get; private set; }

        public IBadgesEarnedByUserRepository BadgesEarnedByUser { get; private set; }

        public IBookmarkRepository Bookmark { get; private set; }

        public ICompaniesToExcludeRepository CompaniesToExclude { get; private set; }

        public IEducationRepository Education { get; private set; }

        public IIndustriesToExcludeRepository IndustriesToExclude { get; private set; }

        public IJobProfileRepository JobProfile { get; private set; }

        public IQuestionRepository Question { get; private set; }

        public ITagRepository Tag { get; private set; }

        public ITechnologiesUsedAsStudentRepository TechnologiesUsedAsStudent { get; private set; }
        public ITechnologiesUsedByUserInJobRepository TechnologiesUsedByUserInJob { get; private set; }

        public ITechPreferNotToWorkWithRepository TechPreferNotToWorkWith { get; private set; }

        public ITechWantToWorkWithRepository TechWantToWorkWith { get; private set; }

        public IVwBadgesDetailRepository VwBadgesDetail { get; private set; }

        public IVwQuestionDetailRepository VwQuestionDetail { get; private set; }

        public IVwUserQADetailRepository VwUserQADetail { get; private set; }

        public IWorkExperienceRepository WorkExperience { get; private set; }
        public IWhereUserLikeToWorkRepository WhereUserLikeToWork { get; private set; }

        public IVoteRepository Vote { get; private set; }
        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
