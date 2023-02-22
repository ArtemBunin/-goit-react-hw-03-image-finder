import { InfinitySpin } from  'react-loader-spinner'

export const Loader=()=>{
return(
    <div style={{ position: 'fixed', top:'50%', left: '50%' }}><InfinitySpin 
    width='800'
    color="#382b18"
  /></div>

)
}
