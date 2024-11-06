export interface UserInterface {
  id: string;
  nik: string;
  password: string;
  firstName: string;
  lastName: string | null;
  job: string | null;
  data: { [key: string]: any } | null;
}
