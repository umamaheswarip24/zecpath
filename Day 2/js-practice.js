// DAY 2 - ADVANCED JAVASCRIPT PRACTICE

console.log("ZecPath JavaScript Practice");

// Job data
const jobs = [
    {
        title: "Frontend Developer",
        salary: 30000,
        experience: 1,
        applicants: 12
    },
    {
        title: "Backend Developer",
        salary: 45000,
        experience: 3,
        applicants: 8
    },
    {
        title: "UI Designer",
        salary: 25000,
        experience: 2,
        applicants: 15
    },
    {
        title: "Software Tester",
        salary: 35000,
        experience: 1,
        applicants: 10
    }
];

/* ----------------------------------
   1. Filter jobs by salary
---------------------------------- */

const highSalaryJobs = jobs.filter((job) => {
    return job.salary >= 35000;
});

console.log("Jobs with salary 35000 or more:");

highSalaryJobs.forEach((job) => {
    console.log(`${job.title} - ₹${job.salary}`);
});


/* ----------------------------------
   2. Count total applicants
---------------------------------- */

let totalApplicants = 0;

jobs.forEach((job) => {
    totalApplicants = totalApplicants + job.applicants;
});

console.log(`Total applicants: ${totalApplicants}`);


/* ----------------------------------
   3. Sort jobs by experience
---------------------------------- */

// Spread operator creates a copy of the jobs array
const sortedJobs = [...jobs];

sortedJobs.sort((firstJob, secondJob) => {
    return firstJob.experience - secondJob.experience;
});

console.log("Jobs sorted by experience:");

sortedJobs.forEach((job) => {
    console.log(`${job.title} - ${job.experience} year(s)`);
});


/* ----------------------------------
   4. Map job titles
---------------------------------- */

const jobTitles = jobs.map((job) => {
    return job.title;
});

console.log("Job titles:");

jobTitles.forEach((title) => {
    console.log(title);
});


/* ----------------------------------
   5. Reduce salary totals
---------------------------------- */

const totalSalary = jobs.reduce((total, job) => {
    return total + job.salary;
}, 0);

console.log(`Total salary amount: ₹${totalSalary}`);


/* ----------------------------------
   Destructuring example
---------------------------------- */

const firstJob = jobs[0];

const { title, salary, experience } = firstJob;

console.log("Destructuring Example:");

console.log(`Job Title: ${title}`);
console.log(`Salary: ₹${salary}`);
console.log(`Experience: ${experience} year(s)`);


/* ----------------------------------
   Arrow function example
---------------------------------- */

const showMessage = () => {
    console.log("JavaScript practice completed!");
};

showMessage();