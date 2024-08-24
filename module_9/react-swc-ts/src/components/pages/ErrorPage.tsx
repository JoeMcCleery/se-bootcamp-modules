interface IErrorPageProps {
  message?: string;
}

export default function ErrorPage({ message }: IErrorPageProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl">Oops!</h2>
      <p>{message ? message : "Something went wrong..."}</p>
    </div>
  );
}
