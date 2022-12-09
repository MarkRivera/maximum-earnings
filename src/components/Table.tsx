import './Table.css';

interface TableProps {
  students: Student[];
}

const Table = ({ students }: TableProps) => {
  return (
    <table className='table'>
      <thead>
      <tr>
        <th>Students for Consideration</th>
        <th>Earnings Potential</th>
        <th>Instruction Hours Needed</th>
      </tr>
      </thead>
      <tbody>
      {
        students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>${student.potential}</td>
            <td>{student.hours}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}

export default Table