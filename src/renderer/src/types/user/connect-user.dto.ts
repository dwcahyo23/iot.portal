interface UserIdNikUniqueInputInterface {
  id: string;
  nik: string;
}

export interface ConnectUserInterface {
  id?: string;
  nik?: string;
  id_nik?: UserIdNikUniqueInputInterface;
}
