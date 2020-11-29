using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace CandidateTracker.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string cs)
        {
            _connectionString = cs;
        }
        public List<Candidate> GetAll()
        {
            using (var context = new CandidateContext(_connectionString))
            {
                return context.Candidates.ToList();
            }
        }

        public void Add(Candidate c)
        {
            using (var context = new CandidateContext(_connectionString))
            {
                context.Candidates.Add(c);
                context.SaveChanges();
            }
        }
        public void ConfirmCandidate(int id)
        {
            using (var context = new CandidateContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand("UPDATE Candidates SET Pending = 0, Confirmed = 1 WHERE Id = @id",
                   new SqlParameter("@id", id));
            }
        }
        public void RefuseCandidate(int id)
        {
            using (var context = new CandidateContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand("UPDATE Candidates SET Pending = 0, Refused = 1 WHERE Id = @id",
                   new SqlParameter("@id", id));
            }
        }

        public Candidate GetCandidate(int id)
        {
            using (var context = new CandidateContext(_connectionString))
            {

                return context.Candidates.FirstOrDefault(x => x.Id == id);
            }
        }
    }
}
