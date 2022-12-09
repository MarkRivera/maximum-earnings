interface Student {
  name: string;
  potential: number;
  hours: number;
}

interface StudentForm {
  maxHours: number
  numberOfStudents: number;
  students: Student[]
}