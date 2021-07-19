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
    [Table("UserRoles",Schema="dbo")]
    public partial class UserRole
    {
		#region UserRoleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserRoleId Annotations

        public int UserRoleId { get; set; }

		#region UserId Annotations

        [Range(1, int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Users","dbo","","UserId")]
		#endregion UserId Annotations

        public int UserId { get; set; }

		#region RoleId Annotations

        [Range(1, int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Roles","dbo","","RoleId")]
		#endregion RoleId Annotations

        public int RoleId { get; set; }

        #region Role Annotations

        [ForeignKey(nameof(RoleId))]
        [InverseProperty(nameof(HumanResourceApp.Models.Main.Role.UserRoles))]
        #endregion Role Annotations

        public virtual Role Role { get; set; }

        #region User Annotations

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(HumanResourceApp.Models.Main.User.UserRoles))]
        #endregion User Annotations

        public virtual User User { get; set; }


        public UserRole()
        {
        }
	}
}