const answers={1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7'};
const days=document.getElementById('days');
for(let i=1;i<=7;i++){let d=document.createElement('div');d.className='day';d.draggable=true;d.id='day'+i;d.textContent='Day '+i;d.addEventListener('dragstart',e=>e.dataTransfer.setData('text',i));days.appendChild(d);}
const grid=document.getElementById('grid');
for(let i=1;i<=7;i++){let c=document.createElement('div');c.className='card';c.innerHTML=`<img src="images/${i}.png"><div class="drop" data-a="${i}">Drop Day Here</div>`;grid.appendChild(c);}
document.querySelectorAll('.drop').forEach(d=>{d.addEventListener('dragover',e=>e.preventDefault());d.addEventListener('drop',e=>{e.preventDefault();let v=e.dataTransfer.getData('text');if(v===d.dataset.a){d.textContent='Day '+v+' ✓';d.classList.add('correct');document.getElementById('day'+v).style.display='none';if(document.querySelectorAll('.correct').length===7) alert('Great Job! God created the world in 7 days!');}else alert('Try Again!');});});
