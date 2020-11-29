﻿using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace CandidateTracker.Data
{
    public class CandidateContextFactory: IDesignTimeDbContextFactory<CandidateContext>
    {
        public CandidateContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CandidateTracker.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateContext(config.GetConnectionString("ConStr"));
        }
    }
}
