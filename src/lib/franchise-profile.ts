import franchises from '../../data/franchises.json';
import { teams } from './teams';

const sourceMods=import.meta.glob('../../data/source/franchises/**/*.json',{eager:true});
const bowlMods=import.meta.glob('../../data/championships/*.json',{eager:true});
const bowls=Object.values(bowlMods).flatMap((m:any)=>m.default??m);

export function franchisePaths(){return franchises.map((f:any)=>({params:{id:String(f.franchiseId)},props:{franchise:f}}));}

export function franchiseProfile(franchise:any){
 const id=franchise.franchiseId;
 const lineage=teams.filter((t:any)=>t.franchiseId===id);
 const current=lineage.find((t:any)=>t.teamId===franchise.activeTeamId);
 const chapters=Object.values(sourceMods).flatMap((m:any)=>{const d=m.default??m;if(d.franchiseSlot!==id)return [];return Array.isArray(d.entries)?d.entries:[d];});
 const ids=new Set(lineage.map((t:any)=>t.teamId));
 const wins=bowls.filter((b:any)=>ids.has(b.winnerTeamId));
 const losses=bowls.filter((b:any)=>ids.has(b.loserTeamId));
 return {id,lineage,current,chapters,wins,losses};
}
