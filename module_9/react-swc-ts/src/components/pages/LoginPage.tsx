import Card from "../containers/Card";
import Page from "../containers/Page";
import LoginForm from "../forms/LoginForm";

export default function LoginPage() {
  return (
    <Page centered>
      <div className="space-y-4">
        <h2 className="text-xl text-center">Login</h2>

        <Card>
          <LoginForm />
        </Card>
      </div>
    </Page>
  );
}
