export type ProjectType = {
  id: number;
  slug: string;
  project_name: string;
  image_path: string;
  link: string;
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

export type LabSingle = {
  id: number;
  small_description: string;
  project_name: string;
};

export type LabType = {
  id: number;
  slug: string;
  project_name: string;
  image_path: string;
  iframe_src: string;
  link: string;
  description: string;
};
