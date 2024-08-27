import Card from "../containers/Card";
import Page from "../containers/Page";
import LoginForm from "../forms/LoginForm";

export default function LoginPage() {
  return (
    <Page
      className="grid-cols-1"
      centered
      padding
    >
      <div className="space-y-4">
        <h2 className="text-xl text-center">Login</h2>

        <Card className="max-w-80 w-full m-auto">
          <LoginForm />
        </Card>
      </div>
    </Page>
  );
}
