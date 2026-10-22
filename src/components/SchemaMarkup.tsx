export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'MC OG.MKS',
    alternateName: 'OG.MK$',
    url: 'https://www.ogmks.com.br',
    genre: ['Trap', 'Drill', 'Detroit Rap', 'Brazilian Hip-Hop'],
    locationCreated: {
      '@type': 'Place',
      name: 'Jardim Brasil, São Paulo, Brasil',
    },
    description:
      'MC OG.MKS é um artista e rapper brasileiro focado em Trap, Drill e Detroit, originário do Jardim Brasil em São Paulo.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
