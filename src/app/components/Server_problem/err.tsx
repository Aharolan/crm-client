"use client"
import { useRouter } from 'next/navigation';
import * as Styles from './err.styls'
import { BiRefresh} from 'react-icons/bi';

const Server_problem = () => {
    const router = useRouter();
    const onClick_Refresh =()=>{
        router.push('/')
    }
    return(
        <Styles.div>
            <h1>אופסס... יש בעיות בשרת</h1> 
            <h1>נסה שוב מאוחר יותר</h1>   
            <Styles.button  onClick={onClick_Refresh}><BiRefresh/></Styles.button>     
        </Styles.div>
    )
}
export default Server_problem