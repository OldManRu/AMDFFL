const mods=import.meta.glob('../../data/legacy-records/r*.json',{eager:true});
export const standings=Object.values(mods).flatMap((m:any)=>m.default??m).sort((a:any,b:any)=>a.sourceRank-b.sourceRank);
