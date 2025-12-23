import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useUser } from '../context/userContext';
import { LoginInput } from './LoginInput';

const loginSchema = z.object({
  email: z.string().nonempty('Email required').email('Invalid email'),
  password: z.string().min(1, 'Password required')
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { setEmail } = useUser();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const mutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, data);
      return res.data;
    },
    onSuccess: (data) => {
      alert('Login successful!');
      setEmail(data.user.email);
    },
    onError: (error: any) => {
      alert(error.response?.data?.error || 'Login failed');
    }
  });

  const onSubmit = (data: LoginFormData) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
      <LoginInput register={register('email')} error={errors.email?.message} placeholder="Email" type="text"/>
      <LoginInput register={register('password')} error={errors.password?.message} placeholder="Password" type="password"/>
      <button type="submit" disabled={isSubmitting} className="bg-blue-700 text-white p-2 rounded">
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
