import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FullscreenImage = () => {
    const { id } = useParams();

    const postsQuery = useQuery({
        queryKey: ['results'],
        queryFn: () =>
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                .then(({ data }) => data)
    });
    
  
    return (
        <>
            <img className="img"src={postsQuery.data?.image} alt={postsQuery.data?.name} />
        </>
    );
};
  
export default FullscreenImage;
