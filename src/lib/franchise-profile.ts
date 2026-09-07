import franchises from '../../data/franchises.json';
import { teams } from './teams';

const sourceMods=import.meta.glob('../../data/source/franchises/**/*.json',{eager:true});
const bowlMods=import.meta.glob('../../data/championships/*.json',{eager:true});
const bowls=Object.values(bowlMods).flatMap((m:any)=>m.default??m);
const sources=Object.values(sourceMods);

const historyOrder=(item:any)=>{
 const raw=item.slot??item.historicalId??item.franchiseSlot??'';
 const numeric=Number.parseFloat(String(raw));
 return Number.isFinite(numeric)?numeric:Number.MIN_SAFE_INTEGER;
};

export function franchisePaths(){return franchises.map((f:any)=>({params:{id:String(f.franchiseId)},props:{franchise:f}}));}

export function franchiseProfile(franchise:any){
 const id=franchise.franchiseId;
 const lineage=teams.filter((t:any)=>t.franchiseId===id).sort((a:any,b:any)=>historyOrder(b)-historyOrder(a));
 const current=lineage.find((t:any)=>t.teamId===franchise.activeTeamId);
 const matchingSources=sources.flatMap((m:any)=>{const d=m.default??m;const slot=d.franchiseSlot??Number(String(d.historicalId??'').split('.')[0]);return slot===id?[d]:[];});
 const chapters=matchingSources.flatMap((d:any)=>Array.isArray(d.entries)?d.entries:[d]).sort((a:any,b:any)=>historyOrder(b)-historyOrder(a));
 const ids=new Set(lineage.map((t:any)=>t.teamId));
 const wins=bowls.filter((b:any)=>ids.has(b.winnerTeamId));
 const losses=bowls.filter((b:any)=>ids.has(b.loserTeamId));
 return {id,lineage,current,chapters,wins,losses};
}
