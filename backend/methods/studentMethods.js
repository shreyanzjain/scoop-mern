const prisma = require("../instance/init");

async function get_profile(entityId) {
  const profile = await prisma.student.findFirst({
    where: {
      user_id: entityId,
    }
  });
  return profile;
}

async function get_student(student_id) {
  const profile = await prisma.student.findFirst({
    where: {
      id: student_id,
    },
  });
  if (profile) {
    return { status: 200, data: profile };
  } else {
    return { status: 400, message: "No such student" };
  }
}

async function get_students() {
  const profiles = await prisma.student.findMany({
    select: {
      id: true,
      name: true,
      branch: true,
      verified: true,
    },
  });
  return { status: 200, data: profiles };
}

async function update_profile(
  entityId,
  student_name,
  dob,
  phone,
  phone_alt,
  branch,
  cgpa,
  sem_1,
  sem_2,
  sem_3,
  sem_4,
  sem_5,
  sem_6,
  tenth,
  twelfth,
  kt,
  linkedin,
  leetcode,
  codechef,
  codeforces
) {
  const profile = await prisma.student.findFirst({
    where: {
      user_id: entityId,
    },
  });
  if (profile) {
    return { status: 400, message: "Profile already exists" };
  } else {
    const new_profile = await prisma.student.create({
      data: {
        name: student_name,
        dob: dob,
        phone: phone,
        phone_alt: phone_alt,
        branch: branch,
        cgpa: cgpa,
        sem_1: sem_1,
        sem_2: sem_2,
        sem_3: sem_3,
        sem_4: sem_4,
        sem_5: sem_5,
        sem_6: sem_6,
        tenth: tenth,
        twelfth: twelfth,
        kt: kt,
        linkedin: linkedin,
        leetcode: leetcode,
        codechef: codechef,
        codeforces: codeforces,
        user_id: entityId,
      },
    });
    if (new_profile) {
      return { status: 200, message: "Profile created" };
    } else {
      return {
        status: 400,
        message: "Error, check if all fields are properly sent.",
      };
    }
  }
}

module.exports = { get_profile, update_profile, get_students, get_student };
