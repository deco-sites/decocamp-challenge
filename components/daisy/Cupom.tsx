export interface Props {
  /**
   * @format html
   */
  description: string;
  code: string;
  cta: { text: string; href: string };
}

export default function Cupom(props: Props) {
  const { description, cta, code } = props;
  return (
    <div className="card w-96 bg-[#c1833d] shadow-xl m-auto my-4">
      <div className="card-body items-center text-center">
        <p class="font-bold	text-base">Cupom: {code}</p>
        <p
          className="py-2"
          dangerouslySetInnerHTML={{ __html: description ?? "" }}
        />
        <div className="card-actions">
          <button className="btn btn-primary">{cta.text}</button>
        </div>
      </div>
    </div>
  );
}
