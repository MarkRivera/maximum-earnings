import { useMemo } from "react";

function findMaxEarnings(students: Student[], maxHours: number): {earnings: number, addedStudents: string[]} {
  const addedStudents = [];

  // Sort the students in descending order of their revenue potentials per hour
  const sorted = [...students].sort((a, b) => (b.potential / b.hours) - (a.potential / a.hours));

  let earnings = 0;
  let hours = 0;

  // Add students to the cohort until we reach the maximum number of hours
  for (const student of sorted) {
    if (hours + student.hours > maxHours) {
      continue;
    }
    earnings += student.potential;
    hours += student.hours;
    addedStudents.push(student.name);
  }

  return {earnings, addedStudents};
}

interface useEarningPotentialProps {
  students: Student[];
  maxHours: number;
}

export const useEarningPotential = ({ students, maxHours }: useEarningPotentialProps) => {
  const { earnings, addedStudents } = useMemo(() => findMaxEarnings(students, maxHours), [students, maxHours]);

  const earnerNames = addedStudents.map((student, index) => {
    if (index === addedStudents.length - 1 && addedStudents.length > 1) {
      return `and ${student}`
    }
    return addedStudents.length > 1 ? `${student}, ` : `${student}.`;
  })

  return { earnings, earnerNames }
};