import type { ICategory, ICategoryResponse } from '@/interfaces/ICategory.ts';
import type { IRecipe, IRecipeResponse } from '@/interfaces/IRecipe.ts';

async function getData<T> (url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json() as T;
}

export async function getCategories (): Promise<ICategory[]> {
  try {
    const categories= await getData<ICategoryResponse[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

    return categories.map((category): ICategory => ({
      name: category.nome,
      ingredients: category.ingredientes,
      label: category.rotulo,
      image: category.imagem,
    }));
  } catch (e) {
    console.error(e);
  }
}

export async function getRecipes (): Promise<IRecipe[]> {
  try {
    const recipes = await getData<IRecipeResponse[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');

    await new Promise(resolve => setTimeout(resolve, 2000));
    return recipes.map((recipe): IRecipe => ({
      name: recipe.nome,
      ingredients: recipe.ingredientes,
      label: recipe.rotulo,
      image: recipe.imagem,
    }));
  } catch (e) {
    console.error(e);
  }
}
