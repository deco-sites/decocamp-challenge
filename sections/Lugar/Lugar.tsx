import type { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperatura: Temperature | null;
  text: string;
}

export default function Lugar(props: Props) {
  const { temperatura, text } = props;

  return (
    <div class="text-center">
      <p>{temperatura?.celsius}</p>
      <p>{text}</p>
    </div>
  );
}
