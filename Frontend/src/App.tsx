import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { useUser } from './context/userContext';

export default function App() {
  const [showRegister, setShowRegister] = useState(false);
  const { email } = useUser();

  if (email) return <div className="p-4">Logged in as: {email}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {showRegister ? <RegisterForm /> : <LoginForm />}
      <button onClick={() => setShowRegister(!showRegister)} className="underline text-blue-700">
        {showRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
}
