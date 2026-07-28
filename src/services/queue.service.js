const jobs = new Map();

export const createJob = (job) => {
  jobs.set(job.id, job);
  return job;
};

export const getJob = (id) => {
  return jobs.get(id);
};

export const getAllJobs = () => {
  return [...jobs.values()];
};

export const updateJob = (id, data) => {
  const job = jobs.get(id);

  if (!job) return null;

  const updatedJob = {
    ...job,
    ...data,
    updatedAt: new Date().toISOString()
  };

  jobs.set(id, updatedJob);

  return updatedJob;
};

export const deleteJob = (id) => {
  return jobs.delete(id);
};
