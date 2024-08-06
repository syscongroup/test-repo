const InfoCard = ({
  bg,
  title,
  contentArr,
}: {
  bg: String;
  title: String;
  contentArr: { title: String; sub: String }[];
}) => {
  return (
    <div
      className={`rounded-lg p-4 py-8 pb-10 ${bg} h-fit drop-shadow-sm shadow-sm shadow-blue-200`}
    >
      <h6 className="font-medium text-[1.22rem] text-dawn-pink mb-6 text-center">
        {title}
      </h6>
      <ul className="space-y-3">
        {contentArr.map((content, idx) => (
          <div
            key={idx}
            className="flex justify-start items-start text-gray-300 text-[.975rem] gap-3"
          >
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                className="w-5 h-5"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
            </div>
            <div className="space-y-.5">
              <li className="text-start text-slate-50 rounded w-fit mb-1 font-medium">
                {content.title}
              </li>
              <p className="pl-.5">{content.sub}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
