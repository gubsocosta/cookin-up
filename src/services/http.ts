import type { ICategory, ICategoryResponse } from '@/interfaces/ICategory.ts';

export async function getCategories (): Promise<ICategory[]> {
  const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
  const categories: ICategoryResponse[] = await response.json();

  return categories.map(category => ({
    name: category.nome,
    ingredients: category.ingredientes,
    label: category.rotulo,
    image: category.imagem,
  }));
}
