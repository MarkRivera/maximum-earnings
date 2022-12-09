import './App.css'
import StudentForm from './components/StudentForm';
import Table from './components/Table';
import { useEarningPotential } from './hooks/useEarningPotential';
import { useStudentForm } from './hooks/useStudentForm';

// Inputs: Need inputs for max hours, the number of students, the earning potential of each student, and the number of hours each student needs
// Outputs: The maximum earnings possible given the inputs and the constraints

const EarnerNames = ({ earnerNames, earnings }: { earnerNames: string[], earnings: number }) => {
  if (earnerNames.length) {
    return (
      <h1 className='max-earner'>Max Earnings: ${earnings} with {earnerNames}</h1>
    )
  } else {
    return (
      <h1 className='max-earner'>Max Earnings: ${earnings}</h1>
    )
  }
}

function App() {
  const { studentForm, setNewStudentForm, resetForm } = useStudentForm();

  const { earnings, earnerNames } = useEarningPotential({ students: studentForm.students, maxHours: studentForm.maxHours })

  return (
    <div className="App">
      <h1>Max Instruction Hours: {studentForm.maxHours}</h1>
      <Table students={studentForm.students} />
      <EarnerNames earnerNames={earnerNames} earnings={earnings} />
      <StudentForm oldStudentForm={studentForm} resetForm={resetForm} updateStudentForm={setNewStudentForm} />
    </div>
  )
}

export default App