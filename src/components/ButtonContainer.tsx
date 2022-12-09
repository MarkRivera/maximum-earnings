interface ButtonContainerProps {
  resetForm: () => void;
}

export const ButtonContainer = ({ resetForm }: ButtonContainerProps) => {
  return (
    <div className="button-container">
      <button type="button" onClick={() => resetForm()}>Clear</button>
      <button type="submit">Submit</button>
    </div>
  );
}