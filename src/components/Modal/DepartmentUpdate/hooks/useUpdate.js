import { useContext } from 'react';
import { UpdateContext } from '../context/UpdateProvider';
function useUpdate() {
	return useContext(UpdateContext);
}

export default useUpdate;
