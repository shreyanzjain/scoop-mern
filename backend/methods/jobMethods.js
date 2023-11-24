const prisma = require("../instance/init");

async function create_job(
  company,
  job_role,
  job_description,
  salary,
  status,
  location,
  cgpa_cutoff,
  tenth,
  twelfth,
  kt_allowed,
  drop_allowed_ug,
  branches
) {
  const job = await prisma.job.create({
    data: {
      company: company,
      job_role: job_role,
      job_description: job_description,
      salary: salary,
      status: status,
      location: location,
      cgpa_cutoff: cgpa_cutoff,
      tenth: tenth,
      twelfth: twelfth,
      kt_allowed: kt_allowed,
      drop_allowed_ug: drop_allowed_ug,
    },
  });

  if (branches != undefined) {
    branches.map(async (branch) => {
      await prisma.jobBranch
        .create({
          data: {
            branch: branch,
            job_id: job.id,
          },
        })
        .then(async () => {
          await prisma.$disconnect();
        })
        .catch(async (e) => {
          console.log(e);
          await prisma.$disconnect();
          process.exit(1);
        });
    });
  }
}

async function get_jobs() {
  const jobs = await prisma.job.findMany({
    include: {
      branches: {
        select: {
          branch: true,
        },
      },
    },
  });
  return jobs;
}

module.exports = { create_job, get_jobs };
