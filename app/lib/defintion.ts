export type Project = {
  id: number;
  project_name: string;
  image_path: string;
  small_description: string;
  description: string;
  title_1: string;
  content_1: string;
  title_2: string;
  content_2: string;
  title_3: string;
  content_3: string;
};

export type ProjectSingle = {
  id: string;
  small_description: string;
  project_name: string;
};
