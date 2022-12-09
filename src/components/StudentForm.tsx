import { useEffect, useState } from "react";
import { NumberFormGroup } from "./NumberFormGroup";
import { ButtonContainer } from "./ButtonContainer";
import { StudentInput } from "./StudentInput";

import "./StudentForm.css";


interface StudentFormProps {
  oldStudentForm: StudentForm;
  resetForm: () => void;
  updateStudentForm: (newStudentForm: StudentForm) => void;
}

const StudentForm = ({ oldStudentForm, updateStudentForm }: StudentFormProps) => {
  const [newStudentForm, setNewStudentForm] = useState<StudentForm>({ ...oldStudentForm });

  /* 
   * 
   * Event Handlers
   * 
   *
   */  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const adjustedValue = name === "maxHours" || name === "numberOfStudents" ? parseInt(value) : value;
    setNewStudentForm({ ...newStudentForm, [name]: adjustedValue });
  }

  /* TODO: Potential Abstraction. Looks like there's a pattern here in these function definitions, I can definitely abstract to dry up code */ 

  function handleStudentNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const studentIndex = parseInt(name.replace("studentName", ""));
    const newStudents = newStudentForm.students.map((student, index) => {
      if (index === studentIndex) {
        return { ...student, name: value };
      }

      return student;
    });

    setNewStudentForm({ ...newStudentForm, students: newStudents });
  }

  const handleStudentPotentialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const studentIndex = parseInt(name.replace("potential", ""));

    const newStudents = newStudentForm.students.map((student, index) => {
      if (index === studentIndex) {
        return { ...student, potential: parseInt(value) };
      }

      return student;
    });

    setNewStudentForm({ ...newStudentForm, students: newStudents });
  }

  const handleStudentHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const studentIndex = parseInt(name.replace("hours", ""));

    const newStudents = newStudentForm.students.map((student, index) => {
      if (index === studentIndex) {
        return { ...student, hours: parseInt(value) };
      }

      return student;
    });

    setNewStudentForm({ ...newStudentForm, students: newStudents });
  }

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateStudentForm(newStudentForm)
  }

  /* 
   * 
   * Helper Functions 
   * 
   *
   */ 
  
  const matchStudentListWithNumberOfStudents = (studentList: Student[], currentMaxStudents: number) => {
    if (studentList.length > currentMaxStudents) {
      const newStudents = studentList.slice(0, currentMaxStudents);
      setNewStudentForm({ ...newStudentForm, students: newStudents });
    }

    if (studentList.length < currentMaxStudents) {
      const newStudents = Array.from({ length: currentMaxStudents - studentList.length }, () => {
        return {
          hours: 0,
          name: "",
          potential: 0
        }
      });

      return setNewStudentForm({ ...newStudentForm, students: [...studentList, ...newStudents] });
    }

    return studentList;
  }

  const clearForm = () => {
    setNewStudentForm({
      maxHours: 0, numberOfStudents: 0, students: [{
        hours: 0,
        name: "",
        potential: 0
      }]
    });
  }

  useEffect(() => {
    matchStudentListWithNumberOfStudents(newStudentForm.students, newStudentForm.numberOfStudents);
  }, [newStudentForm.numberOfStudents])

  const studentList = newStudentForm.students.map((student, index) => {
    return (
      <StudentInput
        student={student}
        index={index}
        handleStudentNameChange={handleStudentNameChange}
        handleStudentPotentialChange={handleStudentPotentialChange}
        handleStudentHoursChange={handleStudentHoursChange}
        key={index}
      />
    )
  })

  return (
    <form className="form" onSubmit={e => handleSubmit(e)}>
      <NumberFormGroup htmlFor="maxHours" id="maxHours" name="maxHours" label="Max Hours" value={newStudentForm.maxHours} onChange={handleChange} />
      <NumberFormGroup htmlFor="numberOfStudents" id="numberOfStudents" name="numberOfStudents" label="Number of Students" value={newStudentForm.numberOfStudents} onChange={handleChange} />
      
      <div className="student-editor">
        {studentList}
      </div>

      <ButtonContainer resetForm={clearForm} />
    </form>
  )
}

export default StudentForm