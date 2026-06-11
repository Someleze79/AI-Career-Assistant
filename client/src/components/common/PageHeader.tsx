type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({
  title,
  subtitle,
}: PageHeaderProps) => {

  return (

    <div className="mb-10">

      <h1
        className="
          text-5xl
          font-bold
          mb-3
          text-white
        "
      >
        {title}
      </h1>

      <p
        className="
          text-slate-400
          text-lg
          max-w-3xl
        "
      >
        {subtitle}
      </p>

    </div>

  );
};

export default PageHeader;