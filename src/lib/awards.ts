const mods=import.meta.glob('../../data/awards/*.json',{eager:true});
export const awards=Object.values(mods).flatMap((m:any)=>m.default??m);
export const categories=[...new Set(awards.map((a:any)=>a.category))].sort();
