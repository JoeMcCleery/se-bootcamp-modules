import Card from "../containers/Card";
import Page from "../containers/Page";
import SignUpForm from "../forms/SignUpForm";

export default function SignUpPage() {
  return (
    <Page centered>
      <div className="space-y-4">
        <h2 className="text-xl text-center">Sign Up</h2>

        <Card>
          <SignUpForm />
        </Card>
      </div>
    </Page>
  );
}
