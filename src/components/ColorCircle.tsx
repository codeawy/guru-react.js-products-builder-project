interface IProps {
  color: string;
  onClick: () => void;
}

const ColorCircle = ({ color, onClick }: IProps) => {
  return (
    <span
      style={{ backgroundColor: color }}
      className="inline-block h-5 w-5 cursor-pointer rounded-full"
      onClick={onClick}
    />
  );
};

export default ColorCircle;
