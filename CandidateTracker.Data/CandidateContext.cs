using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CandidateTracker.Data
{
    public class CandidateContext: DbContext
    {
        private string _connectionString;
        public CandidateContext(string cs)
        {
            _connectionString = cs;
        }
        public DbSet<Candidate> Candidates { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
