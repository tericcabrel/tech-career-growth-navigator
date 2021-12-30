import { Category, Resource, ResourceType, Request } from '@/types/model';

export type SelectOption = {
  label: string;
  value: string;
};

export type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export type BgColorVariants = 'primary' | 'red' | 'whiteGray';

export type CreateCategoryInput = {
  name: string;
  description?: string;
  parentId: string | null;
};

export type UpdateCategoryInput = {
  id: string;
  name: string;
  description?: string;
};

type HttpResponse<T> = {
  data: T;
};

export type CommonResponseData = { message: string };
export type CategoryResponseData = HttpResponse<Category>;
export type CategoryResponseListData = HttpResponse<Category[]>;

export type PaginationChangeEventData = {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  totalRecords: number;
};

export type ResourceSearchParams = {
  category?: string;
  page: number;
  search?: string;
};

type PaginatedList = {
  currentPage: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

export type ResourceList = PaginatedList & {
  items: Resource[];
};
export type ResourceResponseData = HttpResponse<Resource>;
export type ResourceListResponseData = HttpResponse<ResourceList>;
export type ResourcesResponseData = HttpResponse<Resource[]>;

export type CreateResourceInput = {
  name: string;
  link: string;
  categoryId: string;
  type: ResourceType;
  description: string | null;
  picture: string | null;
  extra?: any;
};

export type PartialCategory = {
  id: string;
  name: string;
  value: string;
  description: string | null;
  parentId: string | null;
};

export type CategoryTree = PartialCategory & {
  children: CategoryTree[];
  isChecked: boolean;
};

export type CreateRequestInput = {
  userName: string;
  userEmail: string;
  description?: string;
  categoryId: string | null;
};

export type RequestResponseData = HttpResponse<Request>;
export type RequestResponseListData = HttpResponse<Request[]>;
