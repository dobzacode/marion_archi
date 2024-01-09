export async function generateStaticParams() {
  const allType = [
    'architecture',
    'architecture_interieurs',
    'architecture_retail',
    'architecture_tertiaire'
  ];

  return allType.map((type) => ({
    type
  }));
}
