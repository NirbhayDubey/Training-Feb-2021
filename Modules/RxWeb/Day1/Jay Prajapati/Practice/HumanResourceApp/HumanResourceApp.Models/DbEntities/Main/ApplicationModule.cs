using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using HumanResourceApp.Models.Enums.Main;
using HumanResourceApp.BoundedContext.SqlContext;
namespace HumanResourceApp.Models.Main
{
    [Table("ApplicationModules",Schema="dbo")]
    public partial class ApplicationModule
    {
		#region ApplicationModuleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ApplicationModuleId Annotations

        public int ApplicationModuleId { get; set; }

		#region ModuleMasterId Annotations

        [Range(1, int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("ModuleMasters","dbo","","ModuleMasterId")]
		#endregion ModuleMasterId Annotations

        public int ModuleMasterId { get; set; }


        public Nullable<int> ParentApplicationModuleId { get; set; }

        #region ModuleMaster Annotations
        [ForeignKey(nameof(ModuleMasterId))]
        [InverseProperty(nameof(HumanResourceApp.Models.Main.ModuleMaster.ApplicationModules))]
        #endregion ModuleMaster Annotations

        public virtual ModuleMaster ModuleMaster { get; set; }


        public virtual ICollection<RolePermission> RolePermissions { get; set; }


        public ApplicationModule()
        {
			RolePermissions = new HashSet<RolePermission>();
        }
	}
}