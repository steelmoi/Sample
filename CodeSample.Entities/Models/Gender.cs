using System;
using System.Collections.Generic;

#nullable disable

namespace CodeSample.Entities.Models
{
    public partial class Gender
    {
        public Gender()
        {
            Movies = new HashSet<Movie>();
        }

        public long GenderId { get; set; }
        public string GenderName { get; set; }
        public int? Status { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }
    }
}
