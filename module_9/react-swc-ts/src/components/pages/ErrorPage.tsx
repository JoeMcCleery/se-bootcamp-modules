import Page from "../containers/Page";

interface IErrorPageProps {
  message?: string;
}

export default function ErrorPage({ message }: IErrorPageProps) {
  return (
    <Page
      centered
      padding
    >
      <div className="text-center space-y-4">
        <h2 className="text-xl">Oops!</h2>
        <p>{message ? message : "Something went wrong..."}</p>
      </div>
    </Page>
  );
}
