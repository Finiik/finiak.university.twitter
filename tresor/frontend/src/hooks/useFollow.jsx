import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useFollow = () => {
const queryClient = useQueryClient();

const {mutate:follow, isPending} = useMutation({
    mutationFn: async(userId) => {
        try {
            const res = await fetch(`api/users/follow/${userId}`,{ // TODO If the fetch call itself fails (e.g., network error), it might not reach the catch block. It's better to handle such scenarios explicitly.
                method: 'POST',
            })
    
            const data = await res.json();
            if(!res.ok){
                throw new Error(data.error || 'Something went wrong')
            }
            return data;
        } catch (error) {
            throw new Error(error.message);
        } 
    },
    onSuccess:() => {
        Promise.all([
            queryClient.invalidateQueries({queryKey: ['suggestedUsers']}),
            queryClient.invalidateQueries({queryKey: ['authUser']}),
        ])
    },
    onError:(error) => {
        toast.error(error.message)
    }
})

return { follow, isPending};
}

export default useFollow;