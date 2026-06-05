interface Props {
  className?: string;
}

export default function Separator({ className }: Props) {
  return <hr className={`${className} border-0 h-px bg-neutral-500`} />;
}
