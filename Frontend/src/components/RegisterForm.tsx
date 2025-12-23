import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useUser } from '../context/userContext';
import { LoginInput } from './LoginInput';

const registerSchema = z.object({
  email: z.string().nonempty('Email required').email('Invalid email'),
  password: z.string().min(6, 'Password too short'),
  confirmPassword: z.string().min(6, 'Confirm password required')
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const { setEmail } = useUser();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`, data);
      return res.data;
    },
    onSuccess: (data) => {
      alert('Registration successful!');
      setEmail(data.user.email);
    },
    onError: (error: any) => {
      alert(error.response?.data?.error || 'Registration failed');
    }
  });

  const onSubmit = (data: RegisterFormData) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
      <LoginInput register={register('email')} error={errors.email?.message} placeholder="Email" type="text"/>
      <LoginInput register={register('password')} error={errors.password?.message} placeholder="Password" type="password"/>
      <LoginInput register={register('confirmPassword')} error={errors.confirmPassword?.message} placeholder="Confirm Password" type="password"/>
      <button type="submit" disabled={isSubmitting} className="bg-green-700 text-white p-2 rounded">
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};
