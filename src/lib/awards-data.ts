const modules = import.meta.glob('../../data/awards/*.json', { eager: true, import: 'default' });
export const normalizedAwards = Object.values(modules).flat();
