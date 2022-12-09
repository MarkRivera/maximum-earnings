interface StudentInputProps {
  student: Student,
  index: number,
  handleStudentNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleStudentPotentialChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleStudentHoursChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const StudentInput = ({ student, index, handleStudentNameChange, handleStudentPotentialChange, handleStudentHoursChange }: StudentInputProps) => {
  return (
    <div className="student-form-group" key={index}>
      <label htmlFor={`studentName${index}`}>Name</label>
      <input type="text" id={`studentName${index}`} name={`studentName${index}`} value={student.name} onChange={e => handleStudentNameChange(e)} required/>

      <label htmlFor={`potential${index}`}>Earning Potential</label>
      <input type="number" id={`potential${index}`} name={`potential${index}`} value={student.potential} onChange={e => handleStudentPotentialChange(e)} required />

      <label htmlFor={`hours${index}`}>Hours Needed</label>
      <input type="number" id={`hours${index}`} name={`hours${index}`} value={student.hours} onChange={e => handleStudentHoursChange(e)} required />
    </div>
  )
}