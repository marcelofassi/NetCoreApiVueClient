using System;
using System.Collections.Generic;

namespace Persistence.Models
{
    public partial class RoleToUser
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }

        public virtual Role Role { get; set; }
        public virtual User User { get; set; }
    }
}
