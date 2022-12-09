interface NumberFormGroupProps {
  htmlFor: string;
  id: string;
  name: string;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberFormGroup = ({ htmlFor, id, name, label, value, onChange }: NumberFormGroupProps) => {
  return (
    <div className="number-form-group">
      <label htmlFor={htmlFor}>{label}</label>
        <input type="number" id={id} name={name} value={value} onChange={e => onChange(e)} min="0" />
    </div>
  );
}