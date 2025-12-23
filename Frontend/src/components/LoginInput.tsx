interface LoginInputProps {
  register: any;
  error?: string;
  placeholder: string;
  type: string;
}

export const LoginInput = ({ register, error, placeholder, type }: LoginInputProps) => (
  <div>
    <input {...register} type={type} placeholder={placeholder} className="w-full p-2 border rounded"/>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
