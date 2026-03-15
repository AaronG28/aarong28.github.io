// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // 1. Obtener todos los artículos de la colección
  const articulos = await getCollection('articulos');

  // 2. Mapear los artículos al formato que RSS entiende
  const itemsRSS = articulos.map((articulo) => {
    // El slug se genera igual que en tus otras páginas: desde el id del archivo
    const slugFromId = articulo.id.replace(/\.md$/, '').split('/').pop();

    return {
      title: articulo.data.title,
      pubDate: articulo.data.date,
      description: articulo.data.description,
      // La URL completa del artículo. Context.site tiene la URL base (de astro.config)
      link: `${context.site}/${articulo.data.category}/${slugFromId}/`,
    };
  });

  // 3. Devolver el feed RSS generado
  return rss({
    // Campos del feed (personalízalos a tu gusto)
    title: 'Analítica360',
    description: 'Análisis en economía, política, tecnología e historia',
    site: context.site,
    items: itemsRSS,
    customData: '<language>es-es</language>',
    // Opcional: añadir una hoja de estilo para que se vea mejor en el navegador
    // stylesheet: '/rss/styles.xsl',
  });
}