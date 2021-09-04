using System;
using System.Collections.Generic;

#nullable disable

namespace CodeSample.Entities.Models
{
    public partial class Movie
    {
        public Movie()
        {
            MovieActors = new HashSet<MovieActor>();
        }

        public long MovieId { get; set; }
        public string Title { get; set; }
        public long? GenderId { get; set; }
        public DateTime? DateCreated { get; set; }
        public long? UserIdCreated { get; set; }

        public virtual Gender Gender { get; set; }
        public virtual ICollection<MovieActor> MovieActors { get; set; }
    }
}
