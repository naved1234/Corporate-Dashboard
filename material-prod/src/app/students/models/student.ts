export class Student {
  _id: string;
  name: string;
  technology: string;
  experience: number;
  phone: string;
}

export class StudentPaginationRsp {
  docs: Student[];
  total: number;
  pages: number;
  page: number;
  limit: number;
}
