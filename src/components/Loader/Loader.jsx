import { InfinitySpin } from  'react-loader-spinner'

export const Loader=()=>{
return(
    <div style={{ position: 'fixed', top:'50%', left: '40%' }}><InfinitySpin 
    width='400'
    color="#382b18"
  /></div>

)
}
