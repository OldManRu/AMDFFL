const m=import.meta.glob('../../data/hall-of-fame/*.json',{eager:true});
export const hof=Object.values(m).flatMap((x:any)=>x.default??x);
