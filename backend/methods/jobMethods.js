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
      await prisma.jobBranch.create({
        data: {
          branch: branch,
          job_id: job.id,
        },
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

async function get_job_by_id(id) {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      branches: {
        select: {
          branch: true,
        },
      },
    },
  });
  if (job) {
    return { status: 200, data: job };
  } else {
    return { status: 404, data: "No such job exists" };
  }
}

async function get_jobs_by_branch(branch) {
  branch = typeof branch === "string" ? branch : null;
  if (branch) {
    const jobs = await prisma.job.findMany({
      where: {
        branches: {
          some: {
            branch: branch,
          },
        },
      },
    });

    return { status: 200, data: jobs };
  } else {
    return { status: 404, data: "Send branch as query parameter." };
  }
}

module.exports = { create_job, get_jobs, get_job_by_id, get_jobs_by_branch };
