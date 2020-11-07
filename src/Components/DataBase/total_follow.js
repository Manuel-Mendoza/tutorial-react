import DataBase from './database';

let totalfollow = 0; 

function sumatotal(a){
  totalfollow = totalfollow + a
}
DataBase.map((e)=> sumatotal(e.followers))

export default totalfollow;
