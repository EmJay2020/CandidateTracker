using System;
using System.Collections.Generic;
using System.Text;

namespace CandidateTracker.Data
{
    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Note { get; set; }
        public string PhoneNumber { get; set; }
        public bool Pending { get; set; }
        public bool Confirmed { get; set; }
        public bool Refused { get; set; }
    }
}
