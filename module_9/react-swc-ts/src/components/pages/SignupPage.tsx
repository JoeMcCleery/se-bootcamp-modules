import Card from "../containers/Card";
import SignUpForm from "../forms/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl text-center">Sign Up</h2>
      <Card>
        <SignUpForm />
      </Card>
    </div>
  );
}
