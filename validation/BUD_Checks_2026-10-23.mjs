import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
if(!process.argv[2]) throw new Error('Provide the working workbook path');
const w=await SpreadsheetFile.importXlsx(await FileBlob.load(process.argv[2]));
const sh=n=>w.worksheets.getItem(n),v=(n,a,x)=>sh(n).getRange(a).values=[[x]],get=(n,a)=>sh(n).getRange(a).values[0][0];

const snap=sh('ERP Snapshot'),inv=sh('Invoice Register'),checks=[];
const check=(label,n,a,expected)=>{assert.equal(get(n,a),expected,`${label}: ${n}!${a}`);checks.push({label,sheet:n,cell:a,expected,result:'PASS',engine:'Artifact Tool local recalculation'});};
check('Missing PO total is explicit','Project Control','L2','PO DATA REQUIRED');
v('ERP Snapshot','S2',35000);check('Budget remaining','Project Control','J2',3000);check('Preventive threshold','Project Control','L2','PREVENTIVE ALERT');
v('ERP Snapshot','G2',99000);check('Recognized cost not added','Project Control','J2',3000);v('ERP Snapshot','G2',24000);
v('ERP Snapshot','S2',39000);check('Over budget on PO total','Project Control','L2','OVER BUDGET');v('ERP Snapshot','S2',0);check('Explicit zero is valid','Project Control','J2',38000);snap.getRange('S2').clear({applyTo:'contents'});
const record=(id,date,amount)=>[id,100245,date,'MX','Strategic Services','N/A','USD',amount,null,'TEST-ERP','ISSUED'];
inv.getRange('A2:K3').values=[record('TEST-1',new Date('2026-09-30T00:00:00Z'),1000),record('TEST-2',new Date('2026-10-01T00:00:00Z'),2000)];
check('Date validation','Invoice Register','L2','VALID');check('Date-derived September','Invoice Register','M2','2026-09');check('October report from invoice date','Management Report','B6',2000);check('Project-month invoice summary','Monthly Project Activity','H5',2000);
v('Invoice Register','C2',new Date('2026-10-15T00:00:00Z'));check('Moving date moves monthly amount','Management Report','B6',3000);check('Unique project count across two invoices','Management Report','B11',1);check('No US invoices in loaded month is zero','Management Report','B16',0);check('Entity invoice sums reconcile','Management Report','B17',0);check('YTD sums dated available months','Management Report','O6',3000);
v('Invoice Register','C2','2026-10-15');check('Text date rejected','Invoice Register','L2','INVALID INVOICE DATE');check('Invalid date cannot silently disappear','Management Report','B6','INVOICE REVIEW');
v('Invoice Register','C2',new Date('2026-10-15T00:00:00Z'));v('Invoice Register','A3','TEST-1');check('Duplicate allocation rejected','Invoice Register','L2','DUPLICATE INVOICE / PROJECT');
v('Invoice Register','A3','TEST-2');v('Invoice Register','K3','CANCELLED');check('Cancelled excluded','Management Report','B6',1000);
v('Invoice Register','K3','ISSUED');v('Invoice Register','G3','MXN');check('MXN cannot bypass FX approval','Invoice Register','L3','FX HOLD');check('Native MXN remains visible during FX hold','Management Report','B33',2000);check('Native USD kept separate','Management Report','B32',1000);v('Invoice Register','G3','USD');
v('Invoice Register','C2',new Date('2026-12-31T00:00:00Z'));v('Invoice Register','C3',new Date('2027-01-01T00:00:00Z'));v('Management Report','B2','2026-12');check('December date retained','Management Report','B6',1000);v('Management Report','B2','2027-01');check('January allocated to new year','Management Report','B6',2000);
v('Management Report','B2','2026-10');inv.getRange('A2:K3').clear({applyTo:'contents'});check('No invented historical dates','Management Report','B6','INVOICE DATA REQUIRED');check('Prior monthly amounts retained','Monthly Project Activity','T2',18000);check('Payment metric removed','Management Report','B7',null);check('Snapshot MXN sales visible without FX','Dashboard','F3',820000);check('Explicit zero invoices retain unbilled sale','Project Control','F5',24000);check('Dashboard unbilled total reconciles','Dashboard','B5',68000);check('Missing PO data cannot appear as no budget alerts','Dashboard','B10','DATA REQUIRED');
assert.equal(checks.length,31);
for(const phrase of ['owner-reported assumptions','not a universal rule','same eligible cost perimeter','not actual cost or realized profit'])assert.ok(get('Guide','B31').includes(phrase));

w.recalculate();
console.log(JSON.stringify({passed:checks.length,total:31,engine:'Artifact Tool local recalculation',checks},null,2));
// All inputs were restored in memory. No workbook is exported or overwritten.
