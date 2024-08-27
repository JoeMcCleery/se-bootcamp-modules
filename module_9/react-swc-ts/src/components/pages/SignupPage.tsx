import Card from "../containers/Card";
import Page from "../containers/Page";
import SignUpForm from "../forms/SignUpForm";

export default function SignUpPage() {
  return (
    <Page
      className="grid-cols-1"
      centered
      padding
    >
      <div className="space-y-4">
        <h2 className="text-xl text-center">Sign Up</h2>

        <Card className="max-w-80 w-full m-auto">
          <SignUpForm />
        </Card>
      </div>
    </Page>
  );
}
