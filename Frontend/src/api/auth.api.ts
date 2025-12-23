import axiosInstance from './axios';

export interface LoginRequest {
  uid: string;
  password: string;
}

export interface LoginResponse {
  user: {
    email: string;
  };
}

export const loginUser = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  const res = await axiosInstance.post('/api/users/login', data);
  return res.data;
};
