import type { ICategory, ICategoryResponse } from '@/interfaces/ICategory.ts';
import type { IRecipe, IRecipeResponse } from '@/interfaces/IRecipe.ts';

export async function getCategories (): Promise<ICategory[]> {
  try {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
    const categories: ICategoryResponse[] = await response.json();

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
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
    const recipes: IRecipeResponse[] = await response.json();

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
