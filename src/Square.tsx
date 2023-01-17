interface IProps {
  id: number;
  currentId: number;
  onClick: (id: number) => void;
}

interface Classes {
  [key: string]: boolean;
}

function classnames(classes: Classes): string {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .reduce((accu, curr) => `${accu}${curr} `, "")
    .trim();
}

export const amountSquare = 25;

export default function Square({ id, currentId, onClick }: IProps) {
  const cssClass = classnames({
    blue: true,
    red: id === currentId,
    green:
      (currentId !== 0 && id === currentId + 1) ||
      (id === 1 && currentId === amountSquare),
  });

  return <div className={cssClass} onClick={() => onClick(id)} />;
}
