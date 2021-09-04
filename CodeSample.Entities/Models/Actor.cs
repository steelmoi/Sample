using System;
using System.Collections.Generic;

#nullable disable

namespace CodeSample.Entities.Models
{
    public partial class Actor
    {
        public Actor()
        {
            MovieActors = new HashSet<MovieActor>();
        }

        public long ActorId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }

        public virtual ICollection<MovieActor> MovieActors { get; set; }
    }
}
