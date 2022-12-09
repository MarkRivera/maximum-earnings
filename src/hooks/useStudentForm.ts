import { useState } from "react"

export const useStudentForm = () => {
  const initialValues: StudentForm = {
    maxHours: 20,
    numberOfStudents: 5,
    students: [
      {
        name: "Jane",
        potential: 1000,
        hours: 3
      },
      {
        name: "Bob",
        potential: 3000,
        hours: 5
      },
      {
        name: "Mark",
        potential: 2700,
        hours: 4
      },
      {
        name: "Jill",
        potential: 5000,
        hours: 8
      },
      {
        name: "Don",
        potential: 3600,
        hours: 5
      }
    ]
  }

  const [studentForm, setStudentForm] = useState<StudentForm>(initialValues);

   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setStudentForm({ ...studentForm, [name]: value });
  }

  function resetForm() {
    setStudentForm(initialValues);
  }

  function setNewStudentForm(newStudentForm: StudentForm) {
    setStudentForm(newStudentForm);
  }

  return {
    studentForm,
    handleChange,
    resetForm,
    setNewStudentForm
  }
}