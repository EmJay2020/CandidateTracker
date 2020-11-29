using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using CandidateTracker.Data;
using CandidateTracker.Web.Models;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("add")]
        public List<Candidate> Add(Candidate c)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.Add(c);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("confirm")]
        public List<Candidate> Confirm(CandidateViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.ConfirmCandidate(vm.CandidateId);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("Refuse")]
        public List<Candidate> Refuse(CandidateViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.RefuseCandidate(vm.CandidateId);
            return repo.GetAll();
        }
        [Route("getall")]
        public List<Candidate> GetAll()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("getcandidate")]
        public Candidate GetCandidate(CandidateViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(vm.CandidateId);
        }
    }
}