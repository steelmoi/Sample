using System;
using System.Collections.Generic;

#nullable disable

namespace CodeSample.Entities.Models
{
    public partial class MovieActor
    {
        public long MovieActorId { get; set; }
        public long? MovieId { get; set; }
        public long? ActorId { get; set; }

        public virtual Actor Actor { get; set; }
        public virtual Movie Movie { get; set; }
    }
}
