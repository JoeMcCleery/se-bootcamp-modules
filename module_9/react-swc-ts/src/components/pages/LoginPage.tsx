import Card from "../containers/Card";
import LoginForm from "../forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl">Login</h2>

      <Card>
        <LoginForm />
      </Card>
    </div>
  );
}
